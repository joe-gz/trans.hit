
//calling pasport method to redirect on success or failure
function postSignup(request, response) {
  var signupStrategy = passport.authenticate('local-signup', {
    successRedirect : '/',
    failureRedirect : '/signup',
    failureFlash : true
  });

  return signupStrategy(request, response);
}
