$(document).ready(function() {
  $('#inputText').on('keyup', function() {
    let inputText = $(this).val();
    if(inputText !== '') {
      $('#submit').prop('disabled', false);
    } else {
      $('#submit').prop('disabled', true);
    }
  });

  $('#submit').click((e) => {
    e.preventDefault();
    if($('#inputText').val() === '') {
      return;
    }
    let name = $('#inputText').val();
    $('.jsResult').text(`Con mẹ mày ${name}`);
    $('.result').fadeIn();
  });
});
