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
  CommentModel.findById(req.params.id).then(function(comment){
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
    console.log("logged?");
    comment.station = station.id
    comment.save(function(err,comment){
      console.log(station.id);
      station.comments.push(comment);
      station.save(function(){
        console.log("hello");
        console.log(comment);
        res.json(comment)
      })
    })
    // station.comments.push(comment);
    // station.save().then(function(err, docs){
    //   res.json(comment)
    // })
  })
});

router.delete("/comments/:id", function(req, res){


  console.log("in the loop");
  console.log(req.params);

  CommentModel.findById(req.params.id).then(function(comment){
    StationModel.findByIdAndUpdate(comment.station, {
      $pull: { comments: {_id: req.params.id} }
    }).then(function(){
      return comment.remove();
    }).then(function(){
      console.log("delete");
      res.json({success: true});
    })
  });

  // StationModel.findByIdAndUpdate(req.params.station_id, {
  //   $pull: { comments: {id: req.params.id} }
  // }).then(function(){
  //   console.log("delete");
  //   res.json({success: true});
  //   console.log("succes");
  // })



});

// /stations/:station_id/comments/

module.exports = router;
