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

mongoose.connect('mongodb://localhost/trans.hit')
var app = express()
// sets view engine to handlebars
// app.set("view engine", "hbs")
// allows for parameters in JSON and html
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
// allows for put/delete request in html form
app.use(methodOverride('_method'))
// connects assets like stylesheets
app.use(express.static(__dirname + '/public'))

// app server located on port 4000
app.listen(4000, function(){
  console.log("app listening on port 4000")
})

// first route we'll define together ...
app.get("/stations", stationsController.index)
