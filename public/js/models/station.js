var Station = function(info){
  this.name = info.name;
  this.metroLine = info.metroLine;
  this.description = info.description;
  this.comment = info.comments;
  this.id = info._id;
};


Station.all = []
Station.fetch = function(){
  var url = "http://localhost:4000/stations";
  var request = $.getJSON(url).then(function(response){
    for(var i = 0; i < response.length; i++){
      Station.all.push(new Station(response[i]));
    }
  }).fail(function(response){
    console.log("js failed to load");
  });
  return request;
};

Station.prototype = {
  fetchComments: function(){
    var station = this;
    var url = "http://localhost:4000/stations/" + station.id + "/comments";
    // var url = "http://localhost:4000/stations.json";
    station.comments = [];
    var request = $.getJSON(url).then(function(response){
      for(var i = 0; i < response.length; i++){
        station.comments.push(new Comment(response[i]));
      }
    }).fail(function(repsonse){
      console.log("js failed to load");
    });
    return request;
  },
  newCommentAdd: function(commentData) {
    var station = this;
    console.log("hello");
    var url = "/stations/" + String(station.id) + "/comments";
    console.log("goodbye");
    var request = $.ajax({
      url: url,
      method: "POST",
      data: JSON.stringify(commentData),
      contentType : "application/json",
      success: function(commentData){
        console.log('Success!');
      }
      , error: function(jqXHR, textStatus, err){
        console.log(textStatus)
      }
    }).then(
      console.log("Done")
    );
    return request;
  }
  ,
  fetchStationInfo: function(){
    var station = this;
    var url = "http://localhost:4000/incidents?";
    // var url = "http://localhost:4000/stations.json";
    station.incidents = [];
    var request = $.getJSON(url).then(function(response){
      for(var i = 0; i < response.length; i++){
        station.incidents.push(new Incident(response[i]));
      }
    }).fail(function(repsonse){
      console.log("js failed to load");
    });
    return request;
  }
}
