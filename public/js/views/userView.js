$('.signup-button').on("click", function(currentUser){
  console.log("clicked");
  if( currentUser){
    $('.login').hide();
    $('.signup').hide();
    $('.logout').show();
  } else {
    $('.login').show();
    $('.signup').show();
    $('.logout').hide();
  }
  console.log("clicked?");
});

$('.login-button').on("click", function(currentUser){
  console.log("clicked");
  if( currentUser){
    $('.login').hide();
    $('.signup').hide();
    $('.logout').show();
  } else {
    $('.login').show();
    $('.signup').show();
    $('.logout').hide();
  }
});
