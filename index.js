// express dependency for our application
var express = require('express')
// loads mongoose dependency
var mongoose = require('mongoose')
// loads dependency for middleware for paramters
var bodyParser = require('body-parser')
// loads dependency that allows put and delete where not supported in html
var methodOverride = require('method-override')
//placeholder for users

var path = require('path')

mongoose.connect('mongodb://localhost/transhit')
var app = express()

// allows for parameters in JSON and html
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
// allows for put/delete request in html form
app.use(methodOverride('_method'))
// connects assets like stylesheets
app.use(express.static(path.join(__dirname, "public")));


var StationModel = require("./models/station");
var CommentModel = require("./models/comment");

var stationsController = require("./controllers/stationsController")
var commentsController = require("./controllers/commentsController")
var usersController = require("./controllers/usersController")

// app.use("*.json",function (req, res, next) {
//   req.headers.accept = 'application/json';
//   next();
// });

// var stationsController = require('./controllers/stationsController.js');

app.get('/', function(req, res){
  // console.log("working?");
  res.sendFile(__dirname + '/public/html/index.html')
})

// INDEX route
// app.get( "/stations.:format?", stationsController.index);
app.use("/", stationsController);

// app server located on port 4000
app.listen(4000, function(){
  console.log("app listening on port 4000")
})
//making user global
// require('./config/passport')(passport);
app.use(function (req, res, next) {
   res.locals.currentUser = req.user;
   next();
 });
