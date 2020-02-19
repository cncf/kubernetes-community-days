[![Netlify Status](https://api.netlify.com/api/v1/badges/de7d2e92-82d4-41ba-8016-33d9b035331d/deploy-status)](https://app.netlify.com/sites/kubernetes-community-days/deploys)

# Kubernetes Community Days website

This repo houses the assets used to build the Kubernetes Community Days (KCD) site at https://kubernetescommunitydays.org.

If you're interested in organizing your own KCD event, visit the [Organizing](https://kubernetescommunitydays.org/organizing) page of the site for requirements and instructions.

## Running the site locally

You can run the KCD site in your local environment if you have the following installed:

* The [Hugo](https://gohugo.io) static site generator. Installation instructions are [here](https://gohugo.io/getting-started/installing/). Make sure to install the version specified in the [`netlify.toml`](./netlify.toml) configuration file.
* The [Yarn](https://yarnpkg.com/lang/en/) dependency management tool for JavaScript and other assets. Installation instructions are [here](https://yarnpkg.com/lang/en/docs/install/#mac-stable).

On a Mac with Homebrew already installed, these instructions can be summarized as `brew install hugo yarn`.

Once those tools are installed, run these commands to view the site locally:

```bash
# Install Sass and other dependencies
yarn

# Run Hugo in "server" mode
hugo server --buildDrafts --buildFuture
```

Open your browser to `http://localhost:1313` to view the site. When you make changes to the source files, the site updates in real time, including a browser refresh.

## Site publishing

The KCD site is published via the [Netlify](https://netlify.com) platform. The site is updated under two conditions:

1. When changes are pushed to this repository's `master` branch
1. Every 24 hours, triggered by a [Zapier Zap](https://zapier.com)

## Link checking

To check the links on the site, run `make production-build`. This builds the "preview" version of the site (which includes future events), downloads the [htmltest](https://github.com/wjdp/htmltest) executable into your local repo, and checks all of the site's internal links. Any broken links are listed via stdout and also written to a log file in your local repo at `tmp/.htmltest/htmltest.log`.

To check external links, run `make external-link-check`. This checks both internal and external links and could take several minutes given dependence on external web resources. We recommend running it periodically and paying attention only to 404 errors.
