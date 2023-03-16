
$(document).ready(function() {
  // toggle tweet Textbox by clicking the Write a new Tweet text
  const loginButton = $('.div_login')
  const loginDiv = $('.testingbox')

  loginButton.on('click', ()=> {
    console.log('help im clicked')
    $(loginDiv).slideToggle("slow")
  });

  $(".show-register").click(function(){
    $('.login-form').hide();
    $('.empty-register').show();
  });
  $(".show-login").click(function(){
    $('.login-form').show();
    $('.empty-register').hide();
  });


});
