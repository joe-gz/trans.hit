var CommentView = function(comment){
  this.comments = comment;
  this.station = comment.station;
  this.$el = $("<div class='comments'></div>");
}

CommentView.prototype = {
  render: function(){
    var self = this;
    console.log("comment"+this.comments.id);
    var commentText = $("<div class = "+this.comments.id+">"+"<p>" + this.comments.text + "</p>"+
    "<button class='deleteComment'>Delete Comment</button>"+"</div>");
    var deleteButton = self.$el.find(".deleteComment");
    console.log(deleteButton);

    // deleteButton.click(function() {
    //   console.log("clicked?");
    //   self.comments.destroy();
    // });

    return(commentText)
  }
}
