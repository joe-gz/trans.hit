var Station = function(info){
  this.name = info.name;
  this.metroLine = info.metroLine;
  this.description = info.description;
  this.comment = info.comments;
  this.id = info._id;
};

var Incident = function(incidentInfo){
  this.description = incidentInfo.Description;
};

//to get all stations
// Station.all = []
// Station.fetch = function(){
//   var url = "http://localhost:4000/stations";
//   var request = $.getJSON(url).then(function(response){
//     for(var i = 0; i < response.length; i++){
//       Station.all.push(new Station(response[i]));
//     }
//   }).fail(function(response){
//     console.log("js failed to load");
//   });
//   return request;
// };
Incident.all = []
Incident.fetch = function(){
  var color = $(".dropdown-menu option:selected").val();
  console.log(color)
  var url = "http://localhost:4000/incidents"
  console.log(url);
  $.ajax({
    url: url,
    type: "GET",
    dataType: "json"
  }).done ( function(response){
    console.log(response.Incidents.length);
    for(var i = 0; i < response.Incidents.length; i++){
      Incident.all.push(new Incident(response.Incidents[i]));
      $('.stations').prepend("<h2>"+response.Incidents[i].Description+"</h2")
    }
  }).fail ( function (){
    console.log("Failure");
  }).always( function(){
    console.log("Something's happening");
  })
};

Station.all = []
Station.fetch = function(){
  var color = $(".dropdown-menu option:selected").val();
  console.log(color)
  var url = "http://localhost:4000/lines/" + color;
  var request = $.getJSON(url).then(function(response){
    for(var i = 0; i < response.length; i++){
      Station.all.push(new Station(response[i]));
    }
  }).fail(function(response){
    console.log("js failed to load");
  });
  return request;
};
//to get the comments
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
