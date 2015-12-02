// require mongoose
var mongoose = require('mongoose')

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId

var StationSchema = new Schema({
  name: String,
  metroLine: String,
  description: String,
  comment: [CommentSchema]
})

var CommentSchema = new Schema({
  Text: String,
  user: [UserSchema]
})

//placeholder for user
var CommentSchema = new Schema({
  name: String,
  email: String,
  password: String, 
})

var StationSchema = mongoose.model("Station", StationSchema)
var CommentSchema = mongoose.model("Comment", CommentSchema)
