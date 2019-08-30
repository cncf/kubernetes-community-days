# Kubernetes Community Days website

This repo houses all of the assets used to build https://kubernetescommunitydays.org.

## Adding your Kubernetes Community Days event

All event data is kept in the [`content/events`](./content/events) directory. To add your Kubernetes Community Days event to this site:

1. Create a new directory under `content/events` with the name `YEAR-city`. So an event in Jakarta in the year 2025 would have the directory name `2025-jakarta`.

1. In that created directory, add a new [Markdown](https://www.markdownguide.org) filed named `_index.md`.

1. Add a header to the file that looks like this:

    ```yaml
    ---
    title: Kubernetes Community Day Pittsburgh # A title for the page
    ---
    ```

1. In addition to a title, add the following information:

    * A `location` for the event, which has two pieces of information: a `name` for the venue and a `url` for that venue.
    * A `tag` for the event (lowercase, letters/numbers/dashes only). The tag must be unique amongst all of the events in `events.yaml`.
    * A `date` for the event in `YYYY-MM-DD` form, e.g. `2020-01-02` for January 2, 2020.
    * If you've created your own website for your event, add a link to that site using `url`.
  
    Here's an example event configuration:

    ```yaml
    ---
    title: Kubernetes Community Days Ridgefield
    url: https://k8s-ridgefield.io
    location:
      name: Ridgefield Community Center, Ridgefield, Washington
      url: https://ridgefieldcommunitycenter.info
    tag: ridgefield-2020
    date: 2020-03-30
    social:
      twitter: ridge_k8s
      facebook: ridge_k8s
    ---
    ```

1. Optionally, add any Markdown content you want below the YAML metadata header.

1. Submit a pull request (PR) to this repository.

1. Netlify creates a preview of your PR. Ensure that things look correct and then add `LGTM` as a comment to your PR.

## Publishing the site

The Kubernetes Community Days website is published automatically by [Netlify](https://netlify.com) upon pushes to the `master` branch.
