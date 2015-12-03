var stationView = function(station){
  this.station = station;
  this.$el = $("<div class='station'></div>");
  this.render();
  $(".stations").append(this.$el);
};
