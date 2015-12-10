var mongoose = require('mongoose')
var mongodbUri = 'mongodb://localhost/transhit';
var conn = mongoose.connect(process.env.MONGOLAB_URI || mongodbUri);
var StationModel = require("../models/station")
var CommentModel = require("../models/comment")
var UserModel = require("../models/user")

StationModel.remove({}, function(err){
  console.log(err)
});
CommentModel.remove({}, function(err){
  console.log(err)
});
UserModel.remove({}, function(err){
  console.log(err)
});

var dupont = new StationModel({
  name:"DuPont Circle",
  metroLine:"Red",
})

var rockville = new StationModel({
  name:"Rockville",
  metroLine:"Red",
})

var faragutNorth = new StationModel({
  name:"Faragut North",
  metroLine:"Red",
})

var fortTotten = new StationModel({
  name:"Fort Totten",
  metroLine:"Green",
})

var vienna = new StationModel({
  name:"Vienna",
  metroLine:"Orange",
})

var greensboro = new StationModel({
  name:"Greensboro",
  metroLine:"Silver",
})

var easternMarket = new StationModel({
  name:"Eastern Market",
  metroLine:"Blue",
})

var stations = [faragutNorth,rockville,dupont,fortTotten,vienna,greensboro,easternMarket];
console.log(stations);
// var comments = [comment1,comment2,comment3];
// console.log(comments);
for(var i = 0; i < stations.length; i++){
  // stations[i].comments.push(comments[i])
  stations[i].save(function(err){
    if (err){
      console.log(err)
    }else {
      console.log("station/comment was saved")
    }
  })
}
