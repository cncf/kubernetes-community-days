# Kubernetes Community Days website

This repo houses all of the assets used to build https://kubernetescommunitydays.org.

## Adding your Kubernetes Community Days event

All event data is kept in the [`events.yaml`](./data/events.yaml) file. To add your Kubernetes Community Days event to this site:

1. Add a new entry to the `events.yaml` file. The following fields are required:

    * A `title`
    * A `location` for the event, which has two pieces of information: a `name` for the venue and a `url` for that venue.
    * A `tag` for the event (lowercase, letters/numbers/dashes only). The tag must be unique amongst all of the events in `events.yaml`.
    * A `date` for the event in `YYYY-MM-DD` form, e.g. `2020-01-02` for January 2, 2020.
    * If you've created your own website for your event, add a link to that site using `url`.
  
    Here's an example event configuration:

    ```yaml
    - title: Kubernetes Days Ridgefield
      url: https://k8s-ridgefield.io
      location:
        name: Ridgefield Community Center, Ridgefield, Washington
        url: https://ridgefieldcommunitycenter.info
      tag: ridgefield-20202
      date: 2020-03-30
      social:
        twitter: ridge_k8s
        facebook: ridge_k8s
    ```

2. Submit a pull request to this repository.

## Publishing the site

The Kubernetes Community Days website is published automatically by [Netlify](https://netlify.com) upon pushes to the `master` branch.
