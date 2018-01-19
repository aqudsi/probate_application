const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const routes = require("./routes");



// Requiring our models for syncing
var db = require("./models");

// Serve up static assets
app.use(express.static("client/build"));
app.use(express.static("/routes"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({ secret: 'password', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
const User = require('./models/users');
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());



// Add routes, both API and view
app.use(routes);


// Start the API server
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});