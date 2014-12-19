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
});
