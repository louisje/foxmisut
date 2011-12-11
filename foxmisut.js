$(function() {
  $('#tabs').tabs();
  $('#foxit').button().click(function() {
    var input = $('#input').val();
    if (input) {
      $.blockUI({ message: '' });
      $.post('foxmisut.php', { 'url': input }, function(text) {
        $('#output').append(text);
        $.unblockUI();
        $('#output').scrollTo('100%');
      }, 'text');
    }
  });
  $('#clear').button().click(function() {
    $('#output').text('');
  });
});
