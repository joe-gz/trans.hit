
var passport = require("passport")
var mongoose = require('mongoose')
var session  = require('express-session');
require('../config/passport')(passport)
// GET /signup
function getSignup(request, response) {
  response.render("index.hbs"
  // , { message: request.flash('signupMessage') }
);
}

// POST /signup
function postSignup(request, response) {
  console.log("Route being hit");
  var signupStrategy = passport.authenticate('local-signup', {
    successRedirect : '/',
    failureRedirect : '/',
    failureFlash : true
  });
  console.log(global.currentUser);
  return signupStrategy(request, response);
}

// GET /login
function getLogin(request, response) {
  response.render('index.hbs'
  // , { message: request.flash('loginMessage') }
);
}

// POST /login
function postLogin(request, response) {
  console.log("Route being hit");
  var loginProperty = passport.authenticate('local-login', {
    successRedirect : '/',
    failureRedirect : '/',
    failureFlash : true
  });
  console.log("This comes from userController"+global.currentUser);
  return loginProperty(request, response);
}

// GET /logout
function getLogout(request, response) {
  req.session.destroy(function (err) {
    res.redirect('/'); //Inside a callback… bulletproof!
  });
  console.log("Logged out");
}

// Restricted page
function secret(request, response){
  // response.render("index.hbs");
}

module.exports = {
  getLogin: getLogin,
  postLogin: postLogin ,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout,
  secret: secret
};
