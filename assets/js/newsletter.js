;(function ($) {
  $(document).ready(function () {
    var fbtn = $('#sendEmail')
    fbtn.on('click', function () {
      var fmail = $('#theEmail')
      fmail.removeClass('required')

      var email = fmail.val()

      var noEmail = !email || email === '' || email.indexOf('@') === -1 || email.indexOf('.') === -1

      if (noEmail) {
        fmail.addClass('required')
        return false
      }

      fbtn.text('Sending...')

      $.ajax({
        url: 'https://tw-follow-me.firebaseio.com/ffblog_email.json',
        method: 'POST',
        data: JSON.stringify({ email: email, ref: location.pathname, date: new Date() }),
        dataType: 'json',
        accepts: {
          json: 'application/json'
        },
        complete: function (data) {
          console.log(data)

          if (data.status !== 200) {
            fbtn.text("There's an error. Try again.")
          } else {
            fbtn.text('Thanks!')
          }

          fmail.val('')
        },
        error: function (err) {
          console.log(err)
          fbtn.text("There's an error, sorry.")
        }
      })

      return false
    })
  })
})(window.jQuery)
