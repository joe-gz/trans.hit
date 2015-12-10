var CommentView = function(comment){
  this.comments = comment;
  this.$el = $("<div class='comment'></div>");
}

CommentView.prototype = {
  render: function(){
    var self = this;
    var commentText = $("<div class = 'comment'>"+"<p>" + this.comments.text + "</p>"+
    "<button class='deleteComment'>Delete Comment</button>"+"</div>");
    var deleteButton = self.$el.find(".deleteComment");
    console.log("commentView");
    console.log("comment text"+commentText);

    $('.deleteComment').on("click", function() {
      console.log("clicked?");
      console.log(self);
      console.log(self.comments);
      self.comments.destroy();
    });

    return(commentText)
  }
}
