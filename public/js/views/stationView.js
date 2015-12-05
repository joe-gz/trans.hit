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
    var commentsDiv = self.$el.find("div.comments");
    self.showComments(commentsDiv)
    commentsDiv.append("<input name='comment' placeholder='enter new comment'>");
    commentsDiv.append("<button class='submitComment'>Submit Comment</button>");
  },
  appendComments: function(comments, commentsDiv){
    comments.forEach(function(comment){
      var commentView = new CommentView(comment);
      commentsDiv.prepend(commentView.render());
    });
  },
  StationTemplate: function(){
    var station = this.station;
    var html = $("<div>");
    html.append("<h3>" + station.name + "</h3>");
    html.append("<div class='comments'></div>");
    return(html);
  },
  showComments: function(commentsDiv){
    var self = this;
    // if not in DOM, populate
    if(commentsDiv.children().length === 0){
      self.station.fetchComments().then(function(){
        self.appendComments(self.station.comments, commentsDiv);
      });
    }
  }
};
