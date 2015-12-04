var CommentView = function(comment){
  this.comment = comment;
}

CommentView.prototype = {
  render: function(){
    var commentText = $("<p>" + this.comment.text + "</p>");
    return(commentText)
  }
}
