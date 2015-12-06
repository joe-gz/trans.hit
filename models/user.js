require("../db/schema")
var mongoose = require('mongoose')

var UserModel = mongoose.model("User")
//encrypt password 
User.methods.encrypt = function(password) {
   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
 };

module.exports = UserModel
