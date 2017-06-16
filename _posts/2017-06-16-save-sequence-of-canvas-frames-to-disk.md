---
title: Save sequence of canvas frames to disk
date: 2017-06-16 14:00:00 +0100
subtitle: 16th June, 2017
style: blue
---

So, you've coded a great animation on a HTML5 canvas with javascript and you need to convert to a movie file?

A quick and common way is pretty easy. Use a software to grab the display window. There are tons of this kind of tools, even the popular QuickTime player can do this kind of job. The only downside is about the framerate. Depending of your script, dropped frames won't be rendered in your final movie file. The final quality of your video won't be high.

If you need to preserve the framerate, perhaps because the final outcome needs to be a high quality movie or because your animation need to be integrated with other video footage, then maybe this script may help you.

**SaveFrame** is a Node.js script that wait for a frame buffer in order to save it to disk. Your canvas animation will be saved frame by frame to disk. Then, you'll be able to compose a final movie using the generated file sequence with AfterEffect or even only (again) with QuickTime player.

I've packed the script into a npm module for an easy setup and integration. 

In short, to use SaveFrame within your project you have to run:

```shell
npm install saveframe
```

then, include in your main .html file the required libraries:

```html
<script src="node_modules/socket.io-client/dist/socket.io.js"></script>
<script src="node_modules/saveframe/client.js"></script>
```

and somewhere in your script:

```javascript
// configure the module
SaveFrame.init(canvas)

// send the frame to Node.js, do this for each new drawn frame
SaveFrame.save()
```

Done this, you need to run the server script specifing the folder you want to save the files:

```shell
node node_modules/saveframe/server.js <foldername>
```

and run your main .html file on a local web server and you've done!

Full documentation [here](https://github.com/abusedmedia/saveframe).

Happy grabbing!
