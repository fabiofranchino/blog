const fs = require('fs')
var slugify = require('slugify')
var moment = require('moment')
var path = require('path')

var logs = fs.readdirSync('./_log')
var newfiles = logs.filter(f => {
  // no start with date and no start with .
  return !f.match(/\d\d\d\d-\d\d-\d\d/) && !f.match(/^[\.]/)
})

newfiles.forEach(f => {
  var src = fs.readFileSync(`./_log/${f}`, 'utf8')
  var rawtitle = f.split('.')[0]
  var partstitle = rawtitle.split('|')
  var title = partstitle[0]
  var filename = slugify(title).toLowerCase()

  var re = /!\[(.*)\]\((.*)\)/gim
  var mtc = src.match(re)

  if (mtc) {
    mtc.forEach(d => {
      re = /!\[(.*)\]\((.*)\)/gim
      var rex = re.exec(d)
      var r = parseInt(Math.random() * 1000)
      var absPath = path.resolve('_log', rex[2])

      var assetName = slugify(`n${r}_` + path.basename(absPath)).toLowerCase()

      var newpath = `./assets/log/${assetName}`
      fs.renameSync(absPath, newpath)

      var newtag = `![](.${newpath})`
      src = src.replace(rex[0], newtag)
    })
  }

  re = /<video src="(.*)"><\/video>/gim
  mtc = src.match(re)
  if (mtc) {
    mtc.forEach(d => {
      var rex = re.exec(d)

      var r = parseInt(Math.random() * 1000)
      var absPath = path.resolve('_log', rex[1])

      var assetName = slugify(`n${r}_` + path.basename(absPath)).toLowerCase()

      var newpath = `./assets/log/${assetName}`
      fs.renameSync(absPath, newpath)

      src = src.replace(rex[0], `<video autoplay muted loop src=".${newpath}"></video>`)
    })
  }

  var today = moment().subtract(4, 'hours')

  var tags = 'log'
  if (partstitle.length > 1) {
    tags = partstitle[1]
  }

  var frontmatter = `---
title: ${title}
date: ${today.format('YYYY-MM-DD HH:mm:00 +0100')}
subtitle: ${today.format('Do MMMM, YYYY')}
categories: Logs
tags: [${tags}]
---

`
  var dest = frontmatter + src
  var finalname = `${today.format('YYYY-MM-DD')}-${filename}.md`
  fs.writeFileSync(`./_log/${finalname}`, dest)
  fs.unlinkSync(`./_log/${f}`)
})
