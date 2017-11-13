---
title: Setting Github up for Codepen
layout: page
last_modified_at: 2017-11-13
permalink: /sketching-with-html-css/setup-github-codepen.html
---

[Github](https://github.com/) is an online service that allows to work on software projects collaboratively. In our context it can be used together with [Codepen](https://codepen.io/) to overcome the problem of handling external assets. Since **Codepen** is an online HTML/CSS editor, it **can't** load local files such as images, videos and audios. All those files must live remotely on some server. **Github** can host and publish those files. 

In this tutorial you'll learn how to setup **Github** properly for our specific need. You'll also learn how to use an image hosted on Github in a Codepen script.

First off, in order to use Github you need to make a personal account, which is free for our purpose:

![](setup-github-codepen-img/01.jpg)

Continue with the default setting in the following steps:

![](setup-github-codepen-img/02.jpg)

Then, you can start a project:

![](setup-github-codepen-img/03.jpg)

Don't forget to confirm your email in order to proceed: 

![](setup-github-codepen-img/04.jpg)

Now it's time to create your first repository which is a place where you can put files that will eventually become public. You can create as many as public repositories you need. Let's create the first one related to your first project. **Don't forget to CHECK the** *"Initilize this repository with a README"* before to press **Create repository**:

![](setup-github-codepen-img/05.jpg)

Now we need to change a setting to let Github to serve our files. Click the **Settings** tab:

![](setup-github-codepen-img/06.jpg)

Scroll down a bit until **Github Pages** section and select the dropdown item **master branch** and save it:

![](setup-github-codepen-img/07.jpg)

You shoud see something similar. Now your repository will put all yours files in a public space. You'll reach those files using as a base URL the one outlined below (in this case: https://jwfvyeeq.github.io/project1/):

![](setup-github-codepen-img/08.jpg)

Get back to the initial page by clicking the **Code** tab:

![](setup-github-codepen-img/06.jpg)

From that page you can drag and drop files or a folder to upload them on your repository:

![](setup-github-codepen-img/09.jpg)

You need to confirm the upload by pressing the **Commit changes** button:

![](setup-github-codepen-img/10.jpg)

Now in the **Code** section you should see the uploaded file/folder:

![](setup-github-codepen-img/11.jpg)

Now, you need to take care about how to build the URL for each resource. First, take note about the base URL. You'll need it to build the full URL for every image/video:

![](setup-github-codepen-img/12.jpg)

The base URL need to be couple with the relative path of each single resourse, i.e. `https://jwfvyeeq.github.io/project1/` and `pict/unnamed.jpg` resulting with the full URL `https://jwfvyeeq.github.io/project1/pict/unnamed.jpg`.

![](setup-github-codepen-img/13.jpg)

Every resource can be previewed using the file system navigator of Github:

![](setup-github-codepen-img/14.jpg)

And here an example about how to display an image hosted on Github within Codepen:

![](setup-github-codepen-img/15.jpg)

