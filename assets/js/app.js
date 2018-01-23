;(function ($) {
  $(document).ready(function () {
    var myLazyLoad = new LazyLoad()

    console.log('ready')
    var allFrames = $('iframe.fuildframe')

    var fluidEl = $('article')

    allFrames.each(function () {
      var md = $(this).data('width-mobile')
      var w = (window.isMobile && md) ? md : this.width
      $(this).data('aspectRatio', this.height / w)
    })

    $(window).resize(function () {
      var newWidth = fluidEl.width()
      allFrames.each(function () {
        var el = $(this)
        el.width(newWidth)
                  .height(newWidth * el.data('aspectRatio'))
      })
    }).resize()

    $('.aggr_cont').hide()
    $('.aggr_togg').find('span').text('+')
    $('.aggr_togg').on('click', function () {
      var isopen = $(this).attr('data-open')
      if (!isopen || isopen === 'false') {
        $(this).attr('data-open', 'true')
        $(this).next().show()
        $(this).find('span').text('-')
      } else {
        $(this).attr('data-open', 'false')
        $(this).next().hide()
        $(this).find('span').text('+')
      }
    })

    // <lineselect lines="2-4,6-7" ></lineselect>

    $('lineselect').each(function () {
      var par = $(this)// .parent()
      var attr = par.attr('lines')
      if (attr) {
        var lines = attr.split(',')
        var pos = []
        lines.forEach(function (d) {
          var coup = d.split('-')
          var diff = coup[1] - coup[0]
          for (var j = 0; j <= diff; ++j) {
            pos.push(+coup[0] + j)
          }
        })
        var nxt = par.next()
        var src = nxt.find('pre code').html()
        var p = src.split('\n')

        var g = p.map(function (d, i) {
          var a = ''
          var b = ''
          var indx = pos.indexOf(i)
          if (indx > -1) {
            a = '<span class="pick">'
            b = '</span>'
          }
          return a + d + b
        })

        nxt.html('<pre class="highlight lineselect"><code>' + g.join('\n') + '</code></pre>')
      }
    })
  })
})(window.jQuery)
