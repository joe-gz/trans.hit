var express = require("express");
var router = express.Router();
var StationModel = require("../models/station");
var CommentModel = require("../models/comment");

var path = require('path');

router.get("/stations", function(req, res){
  StationModel.find({}).populate("comments").then(function(stations){
    res.json(stations);
  });
});

router.get("/stations/:id", function(req, res){
  StationModel.findById(req.params.id).populate("comments").then(function(station){
    res.json(station);
  });
});


router.get("/stations/:id/comments", function(req, res){
  StationModel.findById(req.params.id).populate("comments").then(function(station){
    res.json(station.comments);
  });
});


router.get("/lines/:color", function(req, res){
  StationModel.find({metroLine: req.params.color}).then(function(station){
    console.log("lines/color")
    res.json(station);
  });
});


module.exports = router;
// module.exports = router;
