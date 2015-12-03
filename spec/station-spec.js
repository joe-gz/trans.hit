var StationModel = require("../models/station")
var UserModel = require("../models/user")
var Station = require("../models/station")
var User = require("../models/user")

describe ("a Station",function() {
  var dupont;
  beforeEach(function(){
    dupont = new Station({name:"DuPont Circle",metroLine:"Red"});
  })

  it ("should have a name", function() {
    expect(dupont.name).toBeDefined();
  });

  it ("should have a color line",function (){
    expect(dupont.metroLine).toBeDefined();
  });

});

describe ("a User",function() {
  var joe;
  beforeEach(function(){
    joe = new User({name:"Joe",email:"j@example.com",password:"12345678"});
  })

  it ("should have a name", function() {
    expect(joe.name).toBe("Joe");
  });

  it ("should have an email", function() {
    expect(joe.email).toBeDefined();
  });

  it ("should have a password", function() {
    expect(joe.password).toBeDefined();
  });

});

describe ("a User",function() {
  var joe = new UserModel({
    name: "Joe",
    email: "j@example.com",
    password: "bob",
  })

  it ("should have a name", function() {
    expect(joe.name).toBeDefined();
  });

  it ("should have an email", function() {
    expect(joe.email).toBeDefined();
  });

  it ("should have a password", function() {
    expect(joe.password).toBeDefined();
  });

  it ("should be able to comment", function() {

  });

})


describe ("a Comment",function(){
  it ("should have text", function() {

  });

  it ("should have a station", function() {

  });

  it ("should have a user", function() {

  });

})
