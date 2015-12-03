var mongoose = require('mongoose')
var conn = mongoose.connect('mongodb://localhost/transhit')
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

var dupont = new StationModel({
  name:"DuPont Circle",
  metroLine:"Red",
}).save();

var mcPherson = new StationModel({
  name:"McPherson Square",
  metroLine:"Orange,Blue,Silver"
}).save();

var metroCenter = new StationModel({
  name:"Metro Center",
  metroLine:"Orange,Blue,Silver",
}).save();

var stations = [dupont, mcPherson,metroCenter];
for (var i = 0;i<stations.length;i++){
  console.log(dupont);
}
