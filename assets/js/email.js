;(function ($) {
  $(document).ready(function () {
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
          $('#thanksEmail').show()
          $('#theEmail').val('')
          if (data.statusText === 'error') {
            console.log('err')
            $('#thanksEmail').text("Sorry. There's some error.")
          }
        },
        error: function (err) {
          console.log(err)
        }
      })

      return false
    })
  })
})(window.jQuery)
