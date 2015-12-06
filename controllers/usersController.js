

function getSignup(request, response) {
   response.render('../signup.html', { message: request.flash('signupMessage') });
 };

//calling pasport method to redirect on success or failure
function postSignup(request, response) {
  var signupStrategy = passport.authenticate('local-signup', {
    successRedirect : '/',
    failureRedirect : '/signup',
    failureFlash : true
  });

  return signupStrategy(request, response);
}

function getLogin(request, response) {
  response.render('login.html', { message: request.flash('loginMessage') });
}

function postLogin(request, response) {
  var loginProperty = passport.authenticate('local-login', {
    successRedirect : '/',
    failureRedirect : '/login',
    failureFlash : true
  });

  return loginProperty(request, response);
}

function getLogout(request, response) {
  request.logout();
  response.redirect('/');
}
