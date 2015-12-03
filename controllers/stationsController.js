var express = require("express");
var router = express.Router();
var StationModel = require("../models/station");

router.get("/", function(req, res){
  StationModel.find({}).then(function(stations){
    res.json(stations);
  });
});

// var stationsController = {
//   index: function(req, res){
//     StationModel.find({}, function(err, docs){
//       res.json("stations/index", {stations:docs});
//       // res.render("authors/index", {authors: docs})
//     })
//   }
// }


module.exports = router;
