// express dependency for our application
var express = require('express')
var app = express()
// loads mongoose dependency
var mongoose = require('mongoose')
// loads dependency for middleware for paramters
var bodyParser = require('body-parser')
// loads dependency that allows put and delete where not supported in html
var methodOverride = require('method-override')
var passport     = require('passport');
var session      = require('express-session');


var path = require('path')

mongoose.connect('mongodb://localhost/transhit')


// allows for parameters in JSON and html
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
// allows for put/delete request in html form
app.use(methodOverride('_method'))
// connects assets like stylesheets
app.use(express.static(path.join(__dirname, "public")));

app.use(passport.initialize());
app.use(passport.session());

var StationModel = require("./models/station");
var CommentModel = require("./models/comment");
var UserModel = require("./models/user");

var stationsController = require("./controllers/stationsController")
var commentsController = require("./controllers/commentsController")
var usersController = require("./controllers/usersController")


app.get('/', function(req, res){
  // console.log("working?");
  res.sendFile(__dirname + '/public/html/index.html')
})

// INDEX route

app.use("/", stationsController);


//making user global
require('./config/passport')(passport);
app.use(function (req, res, next) {
  global.currentUser = req.user;
  res.locals.currentUser = req.user;
  next();
});

var routes = require('./config/routes');
app.use(routes);
// require('./config/routes')(app);

 // app server located on port 4000
 app.listen(4000, function(){
   console.log("app listening on port 4000")
 })
