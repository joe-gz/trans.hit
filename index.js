// express dependency for our application
var express = require('express')
// loads mongoose dependency
var mongoose = require('mongoose')
// loads dependency for middleware for paramters
var bodyParser = require('body-parser')
// loads dependency that allows put and delete where not supported in html
var methodOverride = require('method-override')
var stationsController = require("./controllers/stationsController")
var commentsController = require("./controllers/commentsController")
//placeholder for users
var usersController = require("./controllers/usersController")

var path = require('path')

mongoose.connect('mongodb://localhost/transhit')
var app = express()

// allows for parameters in JSON and html
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
// allows for put/delete request in html form
app.use(methodOverride('_method'))
// connects assets like stylesheets
app.use(express.static(path.join(__dirname , '/public')))

var StationModel = require("./models/station");
var CommentModel = require("./models/comment");


app.use("*.json",function (req, res, next) {
  req.headers.accept = 'application/json';
  next();
});

var stationsController = require('./controllers/stationsController.js');


// app server located on port 4000
app.listen(4000, function(){
  console.log("app listening on port 4000")
})


app.get('/', function(req, res){
  res.redirect('/stations')
})

// INDEX route
app.get( "/stations.:format?", stationsController.index);





// first route we'll define together ...
// app.get("/stations", function(req, res){
//   res.sendFile(__dirname + '/public/index.html');
// });
//
// app.get("/stations.json", function(req, res){
//   StationModel.find({}).then(function(stations){
//     res.json(stations);
//   });
// });

// app.get("/comments.json", function(req, res){
//   CommentModel.find({}).then(function(comments){
//     res.json(comments);
//   });
// });
//
// app.use("*.json",function (req, res, next) {
//   req.headers.accept = 'application/json';
//   next();
// });

// app.use("/stations:format?", require("./controllers/stationsController"));

// app.get("/stations", stationsController.index)
