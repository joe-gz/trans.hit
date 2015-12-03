var StationView = function(station){
  this.station = station;
  this.$el = $("<div class='station'></div>");
  this.render();
  $(".stations").append(this.$el);
};

StationView.prototype = {
  render: function(){
    var self = this;
    self.$el.html(self.StationTemplate());
    // var showButton = self.$el.find(".showSongs");
    // var songsDiv   = self.$el.find("div.songs");
    // songsDiv.hide();
  },
  StationTemplate: function(){
    var station = this.station;
    var html = $("<div>");
    html.append("<h3>" + station.name + "</h3>");
    // html.append("<img class='station-photo' src='" + station.photoUrl + "'>");
    // html.append("<button class='showSongs'>Show Songs</button>");
    // html.append("<div class='songs'></div>");
    return(html);
  }
};
