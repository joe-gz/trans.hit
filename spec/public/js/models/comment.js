var Comment = function(info){
  this.text = info.text;
  this.station = info.station;
  this.id = info._id;
  this.user = info.user;
};

Comment.prototype = {
  destroy: function() {
    var comment = this;
    console.log(comment);
    var url = "/comments/"+comment.id;
    console.log(url);
    console.log(comment.station);
    var request = $.ajax( {url: url, method: "delete"} );
    console.log(request);
    return request;
  }
};
