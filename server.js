const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

// Requiring our models for syncing
var db = require("./models");

// Serve up static assets
app.use(express.static("client/build"));
app.use(express.static("/routes"))

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Add routes, both API and view
app.use(routes);


// Start the API server
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});