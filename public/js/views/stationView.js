var StationView = function(station){
  this.station = station;
  this.$el = $("<div class='station'></div>");
  this.render();
  $(".stations").append(this.$el);
};

StationView.prototype = {
  render: function(){
    var self = this;
    var station = self.station
    var metro = self.metroLine
    self.$el.html(self.StationTemplate());
    var commentsDiv = self.$el.find("div.comments");
    var stationInfo = self.$el.find(".stationInfo")
    var showButton = self.$el.find(".showComments");
    commentsDiv.hide(); // hide div until it's populated with comments


    showButton.on("click", function(){
      self.toggleComments(commentsDiv);
    });
  },
  StationTemplate: function(){
    var station = this.station;
    var html = $("<div class='station'>");
    html.append("<h3 class= 'stationdiv'><a>" + station.name + "</a></h3>");
    html.append("<button class='showComments'>Show Comments</button>");
    html.append("<div class='comments'></div>");
    return(html);
  },

  toggleButton: function(commentsDiv){
    if(commentsDiv.is(":visible")){
      commentsDiv.siblings("button.showComments").text("Hide Comments");
    } else {
      commentsDiv.siblings("button.showComments").text("Show Comments");
    }
  },
  toggleComments: function(commentsDiv){
    var self = this;
    // if not in DOM, populate
    if(commentsDiv.children().length === 0){
      self.station.fetchComments().then(function(){
        self.prependComments(self.station.comments, commentsDiv);
      });
    }
    // toggle (note: commentsDiv starts hidden)
    commentsDiv.toggle();
    self.toggleButton(commentsDiv);
  },
  prependComments: function(comments, commentsDiv){
    var self = this;
    var station = self.station;
    comments.forEach(function(comment){
      var commentView = new CommentView(comment);
      commentsDiv.prepend(commentView.render());
    });
    commentsDiv.append("<form action=http://localhost:4000/stations/"+station.id+"/comments method=post><input name='"+self.station.id+"' placeholder='enter new comment'>");
    commentsDiv.append("<button class='submitComment'>Submit Comment</button></form>");
    self.$el.find(".submitComment").on("click", function() {
      // console.log("working?");
      self.submitComment();
    });
  },
  submitComment: function() {
    var self = this;
    console.log(self);
    var data = $('input[name='+self.station.id+']').val()
    console.log(data);
    var commentView = new CommentView({text: data});
    var commentsDiv = self.$el.find("div.comments");
    var stationInfo = self.$el.find(".stationInfo")
    console.log(commentsDiv);
    self.station.newCommentAdd(commentView).then(function() { commentsDiv.prepend(commentView.render()); });
    // commentsDiv.prepend(commentView.render());
  }
}

// StationView.prototype = {
//   render: function(){
//     var self = this;
//     var station = self.station;
//     self.$el.html(self.StationTemplate());
//     var commentsDiv = self.$el.find("div.comments");
//     var stationInfo = self.$el.find(".stationInfo")
//     var showButton = self.$el.find(".showComments");
//     commentsDiv.hide(); // hide div until it's populated with comments
//
//
//     showButton.on("click", function(){
//       self.toggleComments(commentsDiv);
//     });
//     $('a').on('click', function(){
//       $('.commentdiv').append("test")
//       // console.log("click happened")
//     })
//   },
//   toggleButton: function(commentsDiv){
//     // if(commentsDiv.is(":visible")){
//     //   commentsDiv.siblings("button.showComments").text("Hide Comments");
//     // } else {
//     //   commentsDiv.siblings("button.showComments").text("Show Comments");
//     // }
//   },
//   toggleComments: function(commentsDiv){
//     var self = this;
//     // if not in DOM, populate
//     if(commentsDiv.children().length === 0){
//       self.station.fetchComments().then(function(){
//         self.prependComments(self.station.comments, commentsDiv);
//       });
//     }
//     // toggle (note: commentsDiv starts hidden)
//     commentsDiv.toggle();
//     self.toggleButton(commentsDiv);
//   },
//   prependComments: function(comments, commentsDiv){
//     var self = this;
//     var station = self.station;
//     comments.forEach(function(comment){
//       var commentView = new CommentView(comment);
//       commentsDiv.prepend(commentView.render());
//     });
//     commentsDiv.append("<form action=http://localhost:4000/stations/"+station.id+"/comments method=post><input name='"+self.station.id+"' placeholder='enter new comment'>");
//     commentsDiv.append("<button class='submitComment'>Submit Comment</button></form>");
//     self.$el.find(".submitComment").on("click", function() {
//       // console.log("working?");
//       self.submitComment();
//     });
//   },
//   StationTemplate: function(){
//     var station = this.station;
//     var html = $("<div class='station'>");
//     html.append("<h3 class= 'stationdiv'><a>" + station.name + "</a></h3>");
//     html.append("<button class='showComments'>Show Comments</button>");
//     html.append("<div class='comments'></div>");
//     return(html);
//   },
//   submitComment: function() {
//     var self = this;
//     console.log(self);
//     var data = $('input[name='+self.station.id+']').val()
//     console.log(data);
//     var commentView = new CommentView({text: data});
//     var commentsDiv = self.$el.find("div.comments");
//     var stationInfo = self.$el.find(".stationInfo")
//     console.log(commentsDiv);
//     self.station.newCommentAdd(commentView).then(function() { commentsDiv.prepend(commentView.render()); });
//     // commentsDiv.prepend(commentView.render());
//   }

//
// };
