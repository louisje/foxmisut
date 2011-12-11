$(function() {
  $('#tabs').tabs();
  $('#foxit').button().click(function() {
    var input = $('#input').val();
    if (input) {
      $.blockUI({ message: '<h2>處理中請稍候 ...</h2>' });
      $.post('foxmisut.php', { 'url': input }, function(text) {
        $('#output').append(text);
        $.unblockUI();
        $('#output').scrollTo({ top: '100%', left: '0px'}, 2000);
      }, 'text');
    }
  });
  $('#clear').button().click(function() {
    $('#output').text('');
    $('#input').val('');
  });
});
