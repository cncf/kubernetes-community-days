# Using Sessionize

As of 2024, we are using Sessionize as our official Call for Proposals platform. Please refer to [the Sessionize playbook for any help](https://sessionize.com/playbook/).

Also, [here is a guide](https://drive.google.com/file/d/1a9seYBhQgowlsbPzQNEFClOlvH8qXcgA/view?usp=sharing) KCD Organizer, and CNCF Ambassador, Michel Murabito created on how to building out a grid agenda.

---

## New Session Notifications in Slack

Automatically receive a Slack message whenever a new session is submitted to your Sessionize CFP. Your organizing team gets notified in real time — including the session title, description, and speaker names — without having to log into Sessionize.

This workflow was first used by KCD Texas and can be replicated by any KCD with a Sessionize event ID, a Slack workspace, and a GitHub repository.

---

### Part 1: Get Your Sessionize API Endpoint

1. Open your Sessionize event dashboard and go to **API / Embed** in the right-side menu.
2. Click **Create a new endpoint**, select **JSON** as the format, and give it a name like `All Data`.
3. Click **Save**, then click the **`</> Get Code`** button.
4. Copy the **Session List** URL — it looks like:

   ```text
   https://sessionize.com/api/v2/<YOUR-EVENT-ID>/view/Sessions
   ```

   Keep this URL private; anyone who has it can read your event data.

> **Note:** By default, the Sessionize API only returns sessions with the status "Accepted and informed." To see sessions in all statuses (Nominated, Waitlisted, Accepted, Declined, etc.) you need to configure your endpoint to include all statuses. Check your endpoint settings in Sessionize to confirm this before wiring up your workflow.

For full details on the Sessionize API, see the [Sessionize API documentation](https://sessionize.com/playbook/api).

![Sessionize API Embed Menue](sessionize-api-embed-menu.png)

---

### Part 2: Set Up the GitHub Actions Workflow

The workflow runs on a schedule (every hour, Monday through Friday, 8 AM–8 PM CST) and can also be triggered manually at any time. Each run fetches all sessions from Sessionize, compares the most recent session ID against the last known ID, and posts a Slack message for any newly submitted sessions.

#### Step 1: Configure Repository Secrets and Variables

In your GitHub repository, go to **Settings → Secrets and variables → Actions**.

Add the following **secrets**:

| Name | Value |
| --- | --- |
| `SESSIONIZE_SESSION_LIST_URL` | Your Sessionize Session List URL from Part 1 |
| `SLACK_WEBHOOK_URL` | Your Slack incoming webhook URL |
| `REPO_ACCESS_TOKEN` | A GitHub Personal Access Token with `repo` scope (needed to update the stored session ID) |

Add the following **variable**:

| Name | Initial value |
| --- | --- |
| `SESSIONIZE_LATEST_SESSION_ID` | Leave empty for the first run |

> **Creating a Personal Access Token (PAT):** In GitHub, go to **Settings → Developer settings → Personal access tokens → Tokens (classic)** and generate a token with the `repo` scope. Store it as the `REPO_ACCESS_TOKEN` secret.
>
> **Creating a Slack incoming webhook:** In your Slack workspace, go to **Apps → Incoming Webhooks** and create a new webhook for your organizing channel. Copy the webhook URL and store it as the `SLACK_WEBHOOK_URL` secret.

#### Step 2: Create the Workflow File

In your GitHub repository, create the file `.github/workflows/session-notifier.yml` with the following content:

```yaml
name: sessionize-new-proposal

on:
  workflow_dispatch:
  schedule:
    - cron: "0 14-23,0-2 * * 1-5" # Every hour between 8AM and 8PM CST, Monday to Friday
env:
  # Setting an environment variable with the value of a configuration variable
  SESSIONIZE_LATEST_SESSION_ID_PREVIOUS: ${{ vars.SESSIONIZE_LATEST_SESSION_ID }}

# No checkout. The retrieve job hits Sessionize + Slack webhooks; the
# update-github-variable job uses secrets.REPO_ACCESS_TOKEN (not GITHUB_TOKEN).
permissions: {}

jobs:
  retrieve-latest-session:
    name: retrieve-latest-session
    runs-on: ubuntu-latest
    outputs:
      SESSIONIZE_LATEST_SESSION_ID_OUTPUT: ${{ steps.retrieve-sessions.outputs.SESSIONIZE_LATEST_SESSION_ID_OUTPUT }}
    steps:
    - id: retrieve-sessions
      name: Retrieve latest session
      env:
        SESSIONIZE_SESSION_LIST_URL: ${{ secrets.SESSIONIZE_SESSION_LIST_URL }}
        SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}
      run: |
        SESSIONIZE_LATEST_SESSION_ID=$(curl -s $SESSIONIZE_SESSION_LIST_URL | jq -r '.[].sessions[].id' | sort -n | tail -n 1)
        echo "SESSIONIZE_LATEST_SESSION_ID_OUTPUT=$SESSIONIZE_LATEST_SESSION_ID" >> "$GITHUB_OUTPUT"

        if [ -z "$SESSIONIZE_LATEST_SESSION_ID_PREVIOUS" ]; then
          echo "Previous session ID is empty, skipping Slack notification"
          exit 0
        fi

        if [ "$SESSIONIZE_LATEST_SESSION_ID_PREVIOUS" -eq "$SESSIONIZE_LATEST_SESSION_ID" ]; then
          echo "Latest session ID is the same as the previous one, skipping Slack notification"
          exit 0
        fi

        SESSIONIZE_NEW_SESSIONS=$(curl -s $SESSIONIZE_SESSION_LIST_URL | jq -r --arg SESSIONIZE_LATEST_SESSION_ID_PREVIOUS "$SESSIONIZE_LATEST_SESSION_ID_PREVIOUS" '[.[].sessions[] | select(.id | tonumber > ($SESSIONIZE_LATEST_SESSION_ID_PREVIOUS | tonumber)) | {id, title, description, speakers: ([.speakers[].name] | join(", "))}]')
        echo $SESSIONIZE_NEW_SESSIONS | jq -c '.[]' | while read -r object; do
          curl -s --location "$SLACK_WEBHOOK_URL" --header 'Content-Type: application/json' --data "$object"
          sleep 3 # sleep to avoid rate limiting
        done

  update-github-variable:
    name: update-github-variable
    runs-on: ubuntu-latest
    needs: retrieve-latest-session
    steps:
    - id: update-github-variable
      uses: mmoyaferrer/set-github-variable@v1.0.0
      env:
        SESSIONIZE_LATEST_SESSION_ID_INPUT: ${{needs.retrieve-latest-session.outputs.SESSIONIZE_LATEST_SESSION_ID_OUTPUT}}
      with:
          name: 'SESSIONIZE_LATEST_SESSION_ID'
          value: ${{ env.SESSIONIZE_LATEST_SESSION_ID_INPUT}}
          repository: ${{ github.repository }}
          token: ${{ secrets.REPO_ACCESS_TOKEN }}
```

#### Step 3: Test the Workflow

1. Commit and push the workflow file to your repository's default branch.
2. Go to **Actions** in your GitHub repository.
3. Select **sessionize-new-proposal** and click **Run workflow** to trigger it manually.
4. Check the run logs and confirm your Slack channel receives a message.

> **First run behavior:** If `SESSIONIZE_LATEST_SESSION_ID` is empty, the workflow will notify Slack for every session currently in Sessionize. After the first run it stores the latest ID, and subsequent runs only post about new submissions.

---

### Why This Helps KCD Organizers

- **Instant awareness** — know the moment a new talk is submitted without checking Sessionize manually.
- **Full context in Slack** — see the session title, description, and speakers directly in your channel so your team can start reviewing right away.
- **No extra tools required** — runs entirely on GitHub Actions with no third-party automation platforms needed.
- **Easy to replicate** — once one KCD sets this up, any other KCD can use the same workflow file and swap in their own secrets.
