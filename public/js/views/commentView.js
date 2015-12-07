var CommentView = function(comment){
  this.comments = comment;
}

CommentView.prototype = {
  render: function(){
    var commentText = $("<p>" + this.comments.text + "</p>");
    return(commentText)
  }
}
