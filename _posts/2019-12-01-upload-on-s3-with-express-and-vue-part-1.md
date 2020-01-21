---
title: Upload on AWS S3 with Express.js and Vue.js - Part 1
date: 2019-12-01 07:00:00 +0100
subtitle: 1st December, 2019
style: blue
cover: cover.png
categories: Tutorials
tags: [tutorial, express, s3, aws, vue]
---

I'm refactoring [my favorite side project](https://www.presenta.cc/). 

Part of this relies on how the file-upload works both on the backend and frontend as well.

In [PRESENTA](https://www.presenta.cc/) the external files are uploaded using AWS S3 service. The real upload happens straight from the front-end app to the AWS servers. The backend is in charge only to request the one-time token from AWS. Here the flow:

- The frontend asks to the backend a valid token (this way the backend can make some additional validation about auth and other stuff)
- The backend asks to AWS the same and routes it to the frontend
- The frontend begins a PUT request to AWS server to upload the files
- The dialogue during the upload happens only between the frontend and the S3 service

## The backend

In this tutorial, I'm explaining the backend code that is an Express.js based app. The dependencies (that need to be installed) are:

- express
- cors
- dotenv
- aws-sdk

Here the minimal Express app:

```js
const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3131

app.listen(port, () => console.log('Server is running on port: ' + port))
```

##  Set-up the CORS

We need a nice dialogue between the backend and the frontend, therefore, we enable the CORS communication with:

```js
const cors = require('cors')
var origins = {
  origin: ['http://localhost:8080'],
  optionsSuccessStatus: 200,
  credentials: false
}
app.use(cors(origins))
```

## Auth with AWS

Here the authentication with S3 using your personal credentials:

```js
const aws = require('aws-sdk')
aws.config.region = 'eu-west-3'
const S3_BUCKET = process.env.S3_BUCKET_NAME
```

## The route

In this little webserver contains only one route with comments between the lines

```js
app.get('/s3', (req, res) => {
  
  // get the params from the initial request
  const fileName = req.query.filename
  const fileType = req.query.filetype
  const ext = path.extname(fileName)
	
  // define the location and the file name
  const pathName = path.join('myfoldertest', 'myuploadedfile' + ext)

  const s3 = new aws.S3()
	
  // configure the S3 object to get the token
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: pathName,
    Expires: 60 * 15,
    ContentType: fileType,
    ACL: 'public-read'
  }
	
  // ask for the token
  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if (err) {
      return res.status(500).json(err)
    }

    const returnData = {
      signedRequest: data,
      url: `${pathName}`
    }
		
    // returning the token to the frontend
    res.status(200).json(returnData)
  })
})
```

This little server can be run with `node index.js` and it will listen at `http://localhost:3131/s3` with the `filename` and the `filetype` parameters correctly set.

This is a bare-bone example without many error handling, just to demonstrate this particular functionality. Full source code [here](https://github.com/fabiofranchino/express-vue-s3-upload-back).

In part 2 I'll dive in the frontend part, of course.

Stay tuned.