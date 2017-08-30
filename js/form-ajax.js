$(function() {
    $('#form-submit').click(sendData);
})

function sendData(e) {
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/rilhad1@gmail.com",
        method: "POST",
        data: {
            name: $('#form-name').val(),
            email: $('#form-email').val(),
            message: $('#form-message').val()
        },
      dataType: "json"
    }).done(function() {
        $('#form')[0].reset();
        // $('#thanks').show();
    })
}
