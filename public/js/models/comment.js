var Comment = function(info){
  this.text = info.text;
  this.stationId = info.stationId;
  this.id = info._id;
  this.user = info.user;
};

Comment.prototype = {
  destroy: function() {
    var comment = this
    console.log("DESTROY");
    var url = "/"+comment.id;
    console.log(url);
    var request = $.ajax( {url: url, method: "delete"} );
    console.log(request);
    return request;
  }
}
