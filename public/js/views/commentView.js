var CommentView = function(comment){
  this.comments = comment;
  this.station = comment.station;
  this.$el = $("<div class='comments'></div>");
}

CommentView.prototype = {
  render: function(){
    var self = this;
    console.log("comment"+this.comments.id);
    // var commentText = $("<div class = "+this.comments.id+">"+"<p>" + this.comments.text + "</p>"+
    // "<button class='deleteComment'>Delete Comment</button>"+"</div>");

    var commentText = $("<div class = 'commentbox'>"+"<p>" + this.comments.text + "</p>"+"</div>");

    self.commentAppend(commentText);
    // var deleteButton = self.$el.find(".deleteComment");
    // console.log(commentText);
    // console.log(deleteButton);
    //
    // commentText.on("click", function() {
    //   console.log("clicked?");
    //   self.comments.destroy().then(function() { commentText.fadeOut()});
    // });
    return(commentText)
  },
  commentAppend: function(commentText) {
    var self = this;
    var editButton = $("<button class='editComment'>Edit Comment</button>");
    var deleteButton = $("<button class='deleteComment'>Delete Comment</button>"+"</div>");

    editButton.on("click", function() {
      console.log("clicked?");
      self.renderEditForm();
    });

    deleteButton.on("click", function() {
      console.log("clicked?");
      self.comments.destroy().then(function() { commentText.fadeOut()});
    });

    commentText.append(editButton);
    commentText.append(deleteButton);

  },
  renderEditForm: function() {
    console.log("render");
    var self = this;
    self.commentEditTemplate(self.comments);

    self.$el.find(".updateComment").on("click", function() {
      self.editComment();
    });
    console.log("anything happen");
  },
  commentEditTemplate: function() {
    console.log("edit form?");
    var comment = this.comments;
    var html = $("<div class='comments'>");
    html.append("<input name='name' value='" + comment.text + "'>");
    html.append("<button class='updateComment'>Update Comment</button>");
    return(html);
  },
  editComment: function(){
    console.log("edit??");
  }
}
