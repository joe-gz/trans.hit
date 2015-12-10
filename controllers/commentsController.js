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
  StationModel.findById(req.params.id, function(err, station){
    var comment = new CommentModel(req.body.comments)
    station.comments.push(comment);
    station.save().then(function(err, docs){
      res.json(comment)
    })
  })
});

router.delete("/:id", function(req, res){
  CommentModel.findByIdAndRemove(req.params._id).then(function(err, doc){
   console.log("err/doc"+err,doc)
    console.log(req.params.id);
    console.log("running?");
    res.json({success: true});
  });
});

module.exports = router;
