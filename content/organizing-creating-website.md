---
title: Creating a website for your event
---

Congratulations on being approved to host a Kubernetes Community Days in your city! This page will guide you through the process of setting up web pages for your event at [kubernetescommunitydays.org](https://kubernetescommunitydays.org), which uses [GitHub](https://github.com/cncf/kubernetes-community-days) to host the website assets, the [Hugo](https://gohugo.io) static site generator to build the website, and [Netlify](https://netlify.com) to host.

If you run into any issues when going through the process outlined in this document, feel free to alert us by [filing a GitHub issue](https://github.com/cncf/kubernetes-community-days/issues). This document is a work in progress and will be updated as needed.

## Create a GitHub Account

The first thing you need to do is create a [GitHub](https://github.com) account if you don't already have one. 

* Create your GitHub account here: https://github.com/ 
* Enter your user name, email, and password, and click **Submit**

    ![Screenshot](/admin/img/howto/github.png)

 * You will receive an email to activate your account
 * Log in and get started!

# Interested in Organizing a Kubernetes Community Days?

* Go to https://github.com/cncf/kubernetes-community-days.
* If you are looking to find other organizers in your area, go to https://github.com/cncf/kubernetes-community-days/projects/2 and see if there are any events in your area. If there *is* an event that is being planned or has already taken place, contact that events' organizers to find out how you can get involved by adding a comment to their issue.

* If there are no events in your area, open an issue:

  * Go to https://github.com/cncf/kubernetes-community-days/issues and click **New Issue**.

* Click **Get started** on the **Organize Event** option

    ![Screenshot](/admin/img/howto/createissue.png)

* In the **Title** space enter "KCD <your city, your country>, Date (if you have one)." The title for Tbilisi, Georgia in 2021, for example, would be "KCD 2021, Tbilisi, Georgia."

* If you are just getting started, fill in as much detail as possible about your event in the **Write** area
  * Organizers information (name, company, title, email)
  * Target date (if you have one)
  * If you have any sponsors (name of company)
  * If you have any other organizers (name, company, title, email)
  * If you are looking for other organizers
 
    ![Screenshot](/admin/img/howto/issue-filled-out.png)

* Click “Submit new issue” when you are done

* Once your issues have been added to the project you can check its status here: https://github.com/cncf/kubernetes-community-days/projects/2 
* As you add organizers, update your issue

    ![Screenshot](/admin/img/howto/updateissue.png)

    When you have your 3 organizers and 2 sponsors and meet all the requirements of the [Getting Started Checklist](/organizing) fill out the lower part of the issue.

    Update your issue:

    * Check all the boxes and be sure to remove the space 
 * Enter all your organizers' information 
 * Enter who is CNCF representative
 * Enter who will manage the money
 * Identify Sponsors
 * Enter date, location, venue (if you have one selected)
 * When you have entered all your information “click submit new issue”

![Screenshot](/admin/img/howto/issue-complete.png)

KCD organizers will then review your issue.

* Your issue will move to “Need organizers or sponsors” while be reviewed 
* Once approved to build your site. 

# Creating your Kubernetes Community Days Event Site
Once your issue is approved, you will receive your email alias and schedu account.
You will then create your website in the cncf/kubernetes-community-days/ repo. 
You will receive access to kcd-organizers slack channel.

If you are new to GitHub and Hugo, take a moment to review the GitHub glossary.

## Setting up your site. 
The first step is to create a fork. Creating a fork makes a copy of the site that you can edit. If you run into issues while editing you can always delete and start over. We also highly recommend creating branches off your fork, working off the branch, then merging the branch. Once your site is final, submit a pull request to have your fork reviewed and approved.

This document will walk you through all the steps to get your site live.

## What is a fork? 
A fork is a personal copy of another user's repository that lives on your account. Forks allow you to freely make changes to a project without affecting the original. Forks remain attached to the original, allowing you to submit a pull request to the original's author to update with your changes. You can also keep your fork up to date by pulling in updates from the original.

Here is how to get started building your website. 
Go to https://github.com/cncf/kubernetes-community-days

* Creating a fork
 * Click on the “Fork” button in the upper left-hand side 

![Screenshot](/admin/img/howto/fork.png)

When your fork has been created you will see your name with the fork in the upper right-hand side

![Screenshot](/admin/img/howto/fork2.png)

## What is a branch? 
A branch is a parallel version of a repository. It is contained within the repository but does not affect the primary or master branch allowing you to work freely without disrupting the "live" version. When you've made the changes you want to make, you can merge your branch back into the master branch to publish your changes. 

* Creating a branch
 * Be sure you are on your forked page, click fork in the upper right-hand corner

![Screenshot](/admin/img/howto/branch.png)

 * Check to make sure that you are in your forked reps (top arrow)
 * Name your branch (2nd arrow)
 * Click “blue” “create branch”(3rd arrow)
 
![Screenshot](/admin/img/howto/fork.png)

 * Always check to be sure that you are in your Fork (1st arrow) and on your branch (2nd arrow) before you start editing. 

![Screenshot](/admin/img/howto/fork2.png)

# Create your site
* Click content>events
 * Click on “create new file” 
 
![Screenshot](/admin/img/howto/createevent.png)

 * Enter the name: “year-yourcity/”
 * Next enter ``.empty” (this will create your event folder)
 * Scroll to the bottom and enter your comments on what you did (i.e. “created year-yourcity”
 * Click “Commit new file”
 
![Screenshot](/admin/img/howto/event2.png)

The easiest way to build your website is to copy the existing files from Bouvet Island and then update those pages with your information. We will walk through those steps below.

* Go to: https://github.com/xrs888/kubernetes-community-days/tree/master/content/events
 * Hover over “forked from cncf/kubernetes-community-days” just under your fork on the upper left-hand side 
 * Right click, select “open in tab”

![Screenshot](/admin/img/howto/event3.png)

 * In the new tab, click the green “Clone or download” button
 * Select “Download ZIP
 
![Screenshot](/admin/img/howto/event4.png)

 * Go to your downloads window on your computer 
 * Unzip the “kubernetes-community-day-master” 
 * Go back to the events folder in GitHub (make sure you are in the forked version and correct branch).
 * Select your event
 * Click “Upload files” 
 
![Screenshot](/admin/img/howto/event5.png)

 * Click on “choose your files” in the middle of the screen
 
![Screenshot](/admin/img/howto/event6.png)

 * Select the files you want to upload 
 * Click on “kubernetes-community-days-events”
 * Click on “content”
 * Click on “events”
 * Click on “2020-bouvet-island”
 * Select the following with “command-click”
  * venue.md
  * sponsor.md
  * sponsor-form.md
  * speakers.md
  * program.md
  * contact.md
  * cfs.md
  * _index.md
* Click the “Open” button

![Screenshot](/admin/img/howto/event7.png)

 * Enter your comments 
 * Click “Commit changes”
 
 ![Screenshot](/admin/img/howto/event8.png)

Now you are ready to start creating your site!

# Uploading Images

* Make sure you are in your forked account and in the correct branch
 * Click the “static” folder
 
 ![Screenshot](/admin/img/howto/image1.png)

 * Click on “img”
 
 ![Screenshot](/admin/img/howto/image2.png)

 * Click on “Create new file” 
 
 ![Screenshot](/admin/img/howto/image3.png)

 * Enter “year-cityname/.empty”
 * Add notes to describe the changes you made
 * Click “commit changes”
 
 ![Screenshot](/admin/img/howto/image4.png)

* Upload your images to your “img-year-city” folder
 * Make sure images are .svg
 * To upload simply go into the “img-year-yourcity” folder and click “upload files”
 * Once uploaded add a comment and “commit changes”
 
 ![Screenshot](/admin/img/howto/image5.png)

# Update _index.md

* Update your _index.md page first
* Go to your fork and branch, then click content>events>your event folder>_index.md (this is where the various pages on your site will pull your images. You need to update all the content on the index with your images, links, etc. 
* Click on _index.md
* Click on the pencil icon on the upper right-hand side

![Screenshot](/admin/img/howto/index1.png)

* Update the information on your venue page
 * Click the edit button with the pencil icon
 * Replace with the content from the Bouvet Island location page to the venue information for your event. 
  * Event name
  * Event dates
  * Event location
  * Event URL
  * Event twitter
  
![Screenshot](/admin/img/howto/index2.png)

 * Update the Sponsor information
  * Enter Sponsor name
  * Image location (in the static folder)
  * URL to Sponsor site
 * Do this for all your sponsors. Continue to update as you add new sponsors
 
 ![Screenshot](/admin/img/howto/index3.png)

 * Add your speakers
  * Enter their name
  * Image location (in the static folder)
  * Twitter 
  * Bio 
  * Link to their website if they have one
 * Continue to add your speakers as you confirm them
 
 ![Screenshot](/admin/img/howto/index4.png)

 * Add your organizers
  * Name
  * Image location (in the static folder)
  * Twitter
  * Homepage if they have one
  
![Screenshot](/admin/img/howto/index5.png)

 * Add your organizers email address
 * Update the copy about your specific event
 * Make any needed changes to the link up section
 
 ![Screenshot](/admin/img/howto/index6.png)

 * Once you are done click “commit changes”

# cfs.md Call for speakers 
Feel free to edit this page to suit your event. You will need to add your Kubernetes Community Days organizer email in two places near the bottom of the page.

* Submit speaking session to <name>, <email address>.
* If you have any questions regarding the process, please contact <name>, <email address>
* Once you have updated your page, enter your Commit changes comment
* Click “Commit changes” button
  
  ![Screenshot](/admin/img/howto/speakers1.png)

# contact.md
This page will pull organizers photos, bios, and twitter handles from the _index.md page. 
You will need to update the email address on this page with your organizers email. 

* If you’d like to contact us by email: <enter your email>
* Enter your commit comment
* Click “Commit changes”
  
 ![Screenshot](/admin/img/howto/contact1.png)

## program.md
For your event program please use Sched.com. You will recieve info on logging into Sched from the CNCF team.
When you login to Sched go to your event.

* Click on the admin button
* Click “extended fields” and enter your teams information
* Add all your admins that will be working on the program page here

![Screenshot](/admin/img/howto/program1.png)

* Click on “schedule’ the top nav bar
* Click on “this spreadsheet template” 

![Screenshot](/admin/img/howto/program2.png)

* Download the spreadsheet
* FIll in as much information as you can
* In column “C” 
 * Enter “Y” if you want the content published
 * Enter “N” if you do not want the content published
* When you have entered all your information simply upload the template


![Screenshot](/admin/img/howto/program3.png)

* Click “finish import”
* Once the file has been imported you will receive an email 
* Click on “Schedule” at the top and your schedule will appear
* If you want to make changes, simply update the spreadsheet and upload it

Embed the Sched link into your KCD page

* Go to Sched page
* Copy the front part of your URL before “sched”

![Screenshot](/admin/img/howto/program4.png)

* Go your events ._index.md page
* Be sure to work in Fork 
* Be sure to create a Branch off your Fork
* Click edit 
* Look for “sched_slug: kubernetescommunitydaybouve” (Line 10 or 11)
* Paste your events info over “kubernetescommunitydaybouve”
* Enter your comments
* Click “commit changes”

![Screenshot](/admin/img/howto/program5.png)

## speakers.md
This page will pull in your speakers' photo, bio, and Twitter handle from the `_index.md` page. You will need to make sure the link to the `cfs.md` is working and you enter your close date for accepting speakers. 

* Make sure link to cfs is working:
  * Put brackets around [proposal submission process]
  * Put parentheses around (.cfs.md)
  * It should look like this [proposal submission process](/speaking)
  * Update your close date
  * Comment on your changes
  * Click “Commit changes”
  
  
![Screenshot](/admin/img/howto/speaking1.png)

## sponsor-form.md
This is a page off the sponsors.md you can use as a form for your sponsors to submit. These are the sponsorship level and options we suggest, you are welcome to come up with additional sponsorships for your event. If you make changes to this page, be sure to update the sponsors.md. These are the fields that need to be updated:

* Kubernetes Day Name - needs to be updated with your city and your year
* Update the date of the event
* Update the location of the event
* Make any adjustments to the sponsorship opportunities
* Update the email address at the bottom of the form to your organizers' email address

![Screenshot](/admin/img/howto/sponsorform1.png)

## sponsors.md

This page hosts your sponsorship levels and your sponsors' logo. 

For the sponsor logos, you will upload their logos to your images folder and then specify them on the _index.md page. See above to update these pages.

This page will require customization for your event. These are the sponsorship level and options we suggest, you are welcome to come up with additional sponsorships for your event. If you make changes to this page, be sure to update the sponsor-form.md. These are the fields that need to be updated to your event.

* Update with your organizers' email address
* Make any changes to the sponsorship options
* Comment on your commit changes
* Click the “Commit changes” button

![Screenshot](/admin/img/howto/sponsors1.png)

## venue.md

This page will need to be completely updated with your specific venue information including location, map, directions to the venue, local public transportation, and parking. Be sure to include any specifics on parking and cost. 

* Update your event name
* Update location
* Include map
* Include how to get to the location
* Include public transportation options
* Include parking details
* Enter commit comments
* Click “commit changes"

![Screenshot](/admin/img/howto/venue1.png)

## Custom CSS

If you'd like to customize the look and feel of your event pages, add a `custom.css` file to your event's directory. If the directory for your event is `content/events/2020-bouvet-island`, for example, the path of your custom CSS file should be `content/events/2020-bouvet-island/custom.css`. You can override *any* of the site's default CSS using this file.

Here is an example `custom.css` file that adds a background image to the "hero" of each page:

```css
#event-hero {
    background-image: url("/img/2019-amsterdam/backdrop.png");
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
}

#event-title {
    color: white;
}

#event-date {
    color: white;
}
```

## Pull request

Pull requests are proposed changes to a repository submitted by a user and accepted or rejected by a repository's collaborators. Like issues, pull requests each has its own discussion forum. For more information, see [About pull requests](https://help.github.com/en/articles/about-pull-requests).

## Merging a Branch - Creating a Pull Request
Merging takes the changes from one branch (in the same repository or from a fork) and applies them into another. This often happens as a pull request (which can be thought of as a request to merge), or via the command line. A merge can be done automatically via a pull request via the GitHub web interface if there are no conflicting changes, or can always be done via the command line. For more information, see [Merging a pull request](https://help.github.com/en/articles/merging-a-pull-request).

Once you have made all your changes to branch you will want to merge it with your fork. You will need to create a Pull Request. Pull requests are proposed changes to a repository submitted by a user and accepted or rejected by a repository's collaborators. Like issues, pull requests each have their own discussion forum. For more information, see [About pull requests](https://help.github.com/en/articles/about-pull-requests).

* Click branches icon 

![Screenshot](/admin/img/howto/pr1.png)

* Click on pull request next to the branch you are done updating all your content and ready to merge your branch into the fork

![Screenshot](/admin/img/howto/pr2.png)

* Compare your changes
 * Be sure the ability to merge is green at the top
 * Everything you have removed will be highlighted in red
 * Everything you have added will be highlighted in green
 * In this instance, you can see that the image was not successfully linked as it has a red X next to it. 
 * Take your time to review 
 * Click “view pull request”
 
 ![Screenshot](/admin/img/howto/pr3.png)


* To see what your page will look like, go to the netlify section
* Right-click and select open in new tab to view your site
* Review your site and make sure everything looks correct

![Screenshot](/admin/img/howto/pr4.png)

* Make sure all the checks have passed
* Make there are no conflicts
* Close pull request

![Screenshot](/admin/img/howto/pr5.png)

* Your branch is not merged with your fork
* Delete your branch

![Screenshot](/admin/img/howto/pr6.png)


* When you open the pull request make sure “call checks have passed” and “the branch has no conflicts. If there are any issues here, you need to fix them before you can close your pull request (see the next section on how to resolve conflicts). 

![Screenshot](/admin/img/howto/pr7.png)

* Right click on the netlify link and “open in a new window” to see how your changes will appear.

![Screenshot](/admin/img/howto/pr8.png)

* If everything looks good, type “LGTM” 
* Click “close and comment”

![Screenshot](/admin/img/howto/pr9.png)

Resolving Conflicts in a Pull Request

* Go to the pull request tab 
* Click the pull request

![Screenshot](/admin/img/howto/pr10.png)

* Select the Pull Request 

![Screenshot](/admin/img/howto/pr11.png)

* Scroll down to the bottom of the page
* It will show the branch has conflicts that must be resolved
* Below that is the file where the conflicts occur

![Screenshot](/admin/img/howto/pr12.png)

* Scroll up to the top of the page and click on file changes
* Scroll down to find the area with the red dot where the error is occuring

![Screenshot](/admin/img/howto/pr13.png)

* Click on  the red circle to see the error
* Open a new tab correct the error 
* Then refresh your pull request
* Once the conflicts have been resolved following the process above pull requests

![Screenshot](/admin/img/howto/pr14.png

# Synching Your Fork
When you create a fork of a repository (below are some instructions) you only have the versions of the files that are in the repository at that time. So if there are any changes in the original repository you may find that your version (your fork) is out of sync. Learn more about syncing your fork here. 

Syncing your fork to the original repository via the browser

* Open your fork of the repository.
* Click the compare button.

![Screenshot](/admin/img/howto/synchfork1.png)

This will open a page titled Comparing Changes and if you look carefully you'll have jumped to the upstream version of the repository. If you were to do a regular pull request then this makes sense as you'd be bringing your changes into the upstream version. But in this case, we want to flip the direction and pull changes from the original version to our fork.

* Change the base fork to your repository

![Screenshot](/admin/img/howto/synchfork2.png)

* You're now back to your fork but you've also asked to compare two identical repositories so GitHub thinks you care about branches, not forks.
* Click on compare across forks to get back your base fork option.

![Screenshot](/admin/img/howto/synchfork3.png)

* Change the head fork to the upstream (original) repository
![Screenshot](/admin/img/howto/synchfork4.png)

* You'll see one of two options:
  * "There isn’t anything to compare" This means you're up to date and you don't have to do anything. 
 * A list of commits. These are the changes that have happened in the repository since you forked your version. 
* Create a pull request

![Screenshot](/admin/img/howto/synchfork5.png)

Type in “LGTM”
Click “Create Pull Request”

![Screenshot](/admin/img/howto/synchfork6.png)

* Your Pull Request has been submitted for review 
* You can view what your site will look like by clicking on the link in the Netlify Section

![Screenshot](/admin/img/howto/synchfork7.png)

* Once your site is approved it will be live. 
* When you need to make changes, simply create a fork and a branch and start editing. 

# Tips for working on your page:
* Create a branch, mess around with it there
* Then open a PR
* Then merge it into master
* This squashes multiple changes into a single one, so we don't need to see your intermediate work


# Resources: 

* Mastering Markdown https://guides.github.com/features/mastering-markdown/
* Why images should be .svg https://www.cncf.io/blog/2019/07/17/what-image-formats-should-you-be-using-in-2019/. 
* Using Branches: https://github.com/KirstieJane/STEMMRoleModels/wiki/Syncing-your-fork-to-the-original-repository-via-the-browser
* Synching your Fork: https://github.com/KirstieJane/STEMMRoleModels/wiki/Syncing-your-fork-to-the-original-repository-via-the-browser
* Bouvet Island content https://github.com/cncf/kubernetes-community-days/edit/master/content/events/2020-bouvet-island/_index.md

