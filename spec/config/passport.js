var LocalStrategy   = require('passport-local').Strategy;
var User            = require('../models/user');

//callback function to check against fields stated
module.exports = function(passport) {
  //add session to cache
  passport.serializeUser(function(user, callback) {
    callback(null, user.id);
  });
  //check session
  passport.deserializeUser(function(id, callback) {
    User.findById(id, function(err, user) {
      callback(err, user);
    });
  });

  passport.use('local-login', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
  }, function(req, email, password, callback) {
    // Search for a user with this email
    User.findOne({ 'local.email' :  email }, function(err, user) {
      if (err) {
        return callback(err);
      }
      // If no user is found
      if (!user) {
        console.log("no user found");
         return callback(null, false);
      }
      // Wrong password
      if (!user.validPassword(password)) {
        console.log("wrong password");
        return callback(null, false);
        //  return callback(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
      }
      console.log("This is being returned from passport login:" + user);
      return callback(null, user);
    });
  }));
  passport.use('local-signup', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
  }, function(req, email, password, callback) {
    // Find a user with this e-mail
    User.findOne({ 'local.email' :  email }, function(err, user) {
      if (err) return callback(err);

      // If there already is a user with this email
      if (user) {
        console.log("email already in use");
        return callback(null, false);
        // return callback(null, false, req.flash('signupMessage', 'This email is already used.'));
      } else {
        // There is no email registered with this emai
        // Create a new user
        var newUser            = new User();
        newUser.local.email    = email;
        newUser.local.password = newUser.encrypt(password);

        newUser.save(function(err) {
          if (err) throw err;
          console.log("This is being returned from passport:" + newUser);
          return callback(null, newUser);
        });
      }
    });
  }));
};
