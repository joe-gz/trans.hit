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
    commentsDiv.append("<input name='"+self.station.id+"' placeholder='enter new comment'>");
    commentsDiv.append("<button class='submitComment'>Submit Comment</button>");
    self.$el.find(".submitComment").on("click", function() {
      self.submitComment();
    });
  },
  prependComment: function(comments, commentsDiv){
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
        self.prependComment(self.station.comments, commentsDiv);
      });
    }
  },
  submitComment: function() {
    var self = this;
    var data = $('input[name='+self.station.id+']').val()
    var commentView = new CommentView({text: data});
    var commentsDiv = self.$el.find("div.comments");
    self.station.newCommentAdd(commentView).then(function() { commentsDiv.prepend(commentView.render()); });
    // commentsDiv.prepend(commentView.render());
  }
};
