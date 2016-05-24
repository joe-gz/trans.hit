var mongoose = require('mongoose');
var conn = mongoose.connect('mongodb://localhost/transhit');
var StationModel = require("../models/station");
var CommentModel = require("../models/comment");
var UserModel = require("../models/user");

StationModel.remove({}, function(err){
  console.log(err);
});
CommentModel.remove({}, function(err){
  console.log(err);
});
UserModel.remove({}, function(err){
  console.log(err);
});

var dupont = new StationModel({
  name:"DuPont Circle",
  metroLine:"Red",
});
var metroCenter = new StationModel({
  name:"Metro Center",
  metroLine:"Red",
});

var fortTotten = new StationModel({
  name:"Fort Totten",
  metroLine:"Green",
});

var vienna = new StationModel({
  name:"Vienna",
  metroLine:"Orange",
});

var greensboro = new StationModel({
  name:"Greensboro",
  metroLine:"Silver",
});

var mcPherson = new StationModel({
  name:"McPherson Square",
  metroLine:"Silver"
});

var easternMarket = new StationModel({
  name:"Eastern Market",
  metroLine:"Blue",
});

var Huntington = new StationModel({
  name:"DuPont Circle",
  metroLine:"Yellow",
});


// var comment1 = new CommentModel({
//   text:"Dupont is the worst"
// })
//
// var comment2 = new CommentModel({
//   text:"mcPhereson is the 2nd worst"
// })
//
// var comment3 = new CommentModel({
//   text:"Metro Center is fine"
// })

var stations = [dupont,Huntington,fortTotten,vienna,metroCenter,greensboro,easternMarket];
console.log(stations);
// var comments = [comment1,comment2,comment3];
// console.log(comments);
for(var i = 0; i < stations.length; i++){
  // stations[i].comments.push(comments[i])
  stations[i].save(function(err){
    if (err){
      console.log(err);
    }else {
      console.log("station/comment was saved");
    }
  });
}
