;(function ($) {
  $(document).ready(function () {
    $('#sendComment').on('click', function () {
      var name = $('#theName').val()
      var comm = $('#theComment').val()
      console.log('click', name, comm)

      $.ajax({
        url: 'https://formspree.io/hello@fabiofranchino.com',
        method: 'POST',
        data: {name: name, comment: comm},
        dataType: 'json',
        accepts: {
          json: 'application/json'
        },
        complete: function (data) {
          console.log(data)
          $('#thanksComment').show()
          $('#comment-form').hide()
          $('#theName').val('')
          $('#theComment').val('')
          if (data.statusText === 'error') {
            console.log('err')
            $('#thanksComment').text("Sorry. There's some error.")
          } else {
            var c = $('<div><p><strong>' + name + '</strong>: ' + comm + '</p></div>')
            $('#commentBoard').append(c)
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
