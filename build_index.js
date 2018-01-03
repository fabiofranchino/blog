
var fs = require('fs')
var _ = require('lodash')
var path = require('path')
var marked = require('marked')
var cheerio = require('cheerio')
var front = require('front-matter')

var tot = 0
var totChar = 0
var db = {posts: []}
var folder = path.join('_posts')
var tags = []
var dir = fs.readdirSync(folder)
_.each(dir, function (f) {
  if (path.extname(f) === '.md' && path.basename(f).indexOf('20') === 0) {
    var file = path.join(folder, f)
    var src = fs.readFileSync(file, 'utf8')
    var post = front(src)
    var html = marked(post.body)

    var body = cheerio.load(html)
    var txt = body.text()
    post.body = txt
    var num = txt.trim().split(/\s+/).length
    tot += num
    totChar += txt.length

    tags = tags.concat(post.attributes.tags)
    tags = _.uniqBy(tags)

    db.posts.push(post)
  }
})

fs.writeFileSync('assets/index/count.json', JSON.stringify({words: tot, chars: totChar}))
fs.writeFileSync('assets/index/db.json', JSON.stringify(db))
fs.writeFileSync('assets/index/tags.json', JSON.stringify(tags))

var tmpl = fs.readFileSync('tag/_tag.tmpl')

_.each(tags, function (t) {
  var tmplpage = _.template(tmpl)
  var srcpage = tmplpage({name: t})
  fs.writeFileSync(`tag/${t}.md`, srcpage)
})
