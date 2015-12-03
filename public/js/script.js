$(document).ready(function(){
  Station.fetch().then(function(stations){
    Station.all.forEach(function(station){
      var view = new StationView(station)
      view.render();
    })
  })
});
