
var express = require ("express");
var app = express();
var bodyParser = require("body-parser");
var methodOverride=require("method-override");
var mySql=require("mysql");


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

var PORT = process.env.PORT || 3306;

// initiate methodOverride
app.use(methodOverride('_method'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// require models for syncing


// Import routes and give the server access to them.
var routes = require("./controller/controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});