$(function()
{
  $('body').keydown(function(e)
  {
    // if you hit enter and the dropdown is not currently open, submit the form
    if(e.keyCode == 13 && $('#ac-list .selected').length === 0)
    {
      $('form[name="add_bkmk_form"]').submit();
    }
  });

  $('body').keyup(function(e)
  {
    // set the selected typeahead background to blue with white foreground
    $('#ac-list .selected').css('background', 'RGB(61,120,229)').css('color', 'white');
  });
});
