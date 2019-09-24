[![Netlify Status](https://api.netlify.com/api/v1/badges/de7d2e92-82d4-41ba-8016-33d9b035331d/deploy-status)](https://app.netlify.com/sites/kubernetes-community-days/deploys)

# Kubernetes Community Days website

This repo houses all of the assets used to build https://kubernetescommunitydays.org.

## Adding your Kubernetes Community Days event

All event data is kept in the [`content/events`](./content/events) directory. To add your Kubernetes Community Days event to this site:

1. Create a new directory under `content/events` with the name `YEAR-city`. So an event in Bouvet Island in the year 2020 would have the directory name `2020-bouvet-island`.
2. 2020-bouvet-island is to be used as a template for your 'YEAR-city'
3. Follow the step-by-step instructions on [how to set-up](https://docs.google.com/document/d/114lN9Mi1_jbhudMk25NE7J_0wONRCx9jbJH9A-Af35s/edit?usp=sharing), edit, and create your own event page.
4. Be sure to craete a fork, and branches as you work on your event pages (more on this in the how to set-up above).
5. Optionally, add any Markdown content you want below the YAML metadata header.
6. When you are ready to push your pages live, submit a pull request (PR) to this repository.
7. Netlify creates a preview of your PR. Ensure that things look correct and then add `LGTM` as a comment to your PR.
8. Your request will be reviewed and squashed and merged once approved.

## Publishing the site

The Kubernetes Community Days website is published automatically by [Netlify](https://netlify.com) upon pushes to the `master` branch.

## License

The contents of this website are published under the Apache 2.0 license. You are also welcome to repurpose any of the content under the CC-BY 4.0 license. Note that sponsor logos are hosted on the site for reliability, but are generally a trademark of the sponsoring organization.
