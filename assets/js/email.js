;(function ($) {
  console.log('one')
  $(document).ready(function () {
    console.log('two')
    $('#sendEmail').on('click', function () {
      var val = $('#theEmail').val()
      console.log('click', val)

      $.ajax({
        url: 'https://formspree.io/hello@fabiofranchino.com',
        method: 'POST',
        data: {email: val},
        dataType: 'json',
        accepts: {
          json: 'application/json'
        },
        complete: function (data) {
          console.log(data)
        },
        error: function (err) {
          console.log(err)
        }
      })

      return false
    })
  })
})(window.jQuery)
