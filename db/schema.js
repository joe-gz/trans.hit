// require mongoose
var mongoose = require('mongoose')
// var mongodbUri = 'mongodb://localhost/transhit';
// var conn = mongoose.connect(process.env.MONGOLAB_URI || mongodbUri);

var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId

var UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
})

var CommentSchema = new Schema({
  text: String,
  user: [UserSchema]
})

var StationSchema = new Schema({
  name: String,
  metroLine: String,
  description: String,
  comments: [CommentSchema]
})


var StationSchema = mongoose.model("Station", StationSchema)
var CommentSchema = mongoose.model("Comment", CommentSchema)
