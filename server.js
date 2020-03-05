// dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// Import routes and give the server access to them.
var routes = require("./controllers/burgerController.js");

app.use(routes);

// starting our Express app
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});