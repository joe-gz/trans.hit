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
var hbs          = require("hbs");

var path = require('path')

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/transhit')

// allows for parameters in JSON and html
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
// allows for put/delete request in html form
app.use(methodOverride('_method'))
// connects assets like stylesheets
app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'hbs');
app.set("views","./public/html");


app.use(session({ secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS',
    resave: true,
    saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

var StationModel = require("./models/station");
var CommentModel = require("./models/comment");
var UserModel = require("./models/user");

var stationsController = require("./controllers/stationsController")
var commentsController = require("./controllers/commentsController")
var usersController = require("./controllers/usersController")



var request = require ("request")
if(app.settings.env == "development"){
  var env = require("./env.js");
}else{
  var env = process.env;
}


//making user global
require('./config/passport')(passport);

app.use(function (req, res, next) {
  global.currentUser = req.user;
  res.locals.currentUser = req.user;
  console.log("index.js1"+currentUser);
  var user = console.log("Index.hbs"+currentUser);
  next();
});

// INDEX route

app.get('/', function(req, res){
  res.render( "index.hbs" )
})

app.get('/logout', function (req, res){
 req.session.destroy(function (err) {
   res.redirect('/'); //Inside a callback… bulletproof!
 });
});

app.use("/", stationsController);
app.use("/", commentsController);

var routes = require('./config/routes');
app.use(routes);


app.get ("/incidents", function(req, res) {
  console.log("Call API?");
  var url = "https://api.wmata.com/StationPrediction.svc/json/GetPrediction/All?api_key=" + env.api_key
  request(url, function(error, response, body) {
    console.log(url)
    var incidents = JSON.parse(body)
    res.json(incidents);
  });
});
 // app server located on port 4000
 app.listen(4000, function() {
   console.log("app listening on port 4000")
 })
