var express = require("express");
var router = express.Router();
var StationModel = require("../models/station");
var CommentModel = require("../models/comment");

function error(response, message){
  response.status(500);
  response.json({error: message})
}

router.get("/", function(req, res){
  CommentModel.find({}).populate("station", "name").then(function(comments){
    res.json(comments);
  });
});

router.get("/:id", function(req, res){
  CommentModel.findById(req.params.id).populate("station", "name").then(function(comment){
    res.json(comment);
  });
});

router.put("/:id", function(req, res){
  CommentModel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}).then(function(comment){
    res.json(comment);
  });
});

router.post("/stations/:id/comments", function(req, res){
  // new CommentModel(req.body.text).save().then(function(comment){
  //   res.json(comment);
  //     });
  //
  // StationModel.findById(req.params.id).populate("comments").then(function(station){
  //   res.json(station.comments);

  CommentModel.create(req.body).then(function(comment){
    res.json(comment);
  });
});

module.exports = router;
