;(function ($) {
  $(document).ready(function () {
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

    $('lineselect').each(function () {
      var par = $(this)// .parent()
      var nxt = par.next()
      var src = nxt.find('pre code').html()
      var p = src.split('\n')

      var g = p.map(function (d, i) {
        var a = ''
        var b = ''
        if (i > 1 && i < 4) {
          a = '<span class="pick">'
          b = '</span>'
        }
        return a + d + b
      })

      nxt.html('<pre class="highlight lineselect"><code>' + g.join('\n') + '</code></pre>')
    })
  })
})(window.jQuery)
