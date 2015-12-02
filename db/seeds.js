var mongoose = require('mongoose')
var conn = mongoose.connect('mongodb://localhost/trans.hit')
var StationModel = require("../models/station")
var CommentModel = require("../models/comment")
var UserModel = require("../models/user")

StationModel.remove({}, function(err){
  console.log(err)
})
CommentModel.remove({}, function(err){
  console.log(err)
})
UserModel.remove({}, function(err){
  console.log(err)
})

var dupont = new Station({
  name:"DuPont Circle",
  metroLine:"Red",
})

var mcPherson = new Station({
  name:"McPherson Square",
  metroLine:["Orange","Blue","Silver"]
})
