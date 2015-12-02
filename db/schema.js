// require mongoose
var mongoose = require('mongoose')

var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId

var UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
})

var CommentSchema = new Schema({
  Text: String,
  user: [UserSchema]
})

var StationSchema = new Schema({
  name: String,
  metroLine: String,
  description: String,
  comment: [CommentSchema]
})



//placeholder for user


var StationSchema = mongoose.model("Station", StationSchema)
var CommentSchema = mongoose.model("Comment", CommentSchema)
//placeholder for user
var UserSchema = mongoose.model("User", UserSchema)
