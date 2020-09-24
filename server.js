// Requiring necessary npm packages
require("dotenv").config();
const compression = require("compression");
const express = require("express");
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(compression());
// We need to use sessions to keep track of our user's login status
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Set up handlebars
// const hbs = require("express-handlebars");
// app.set("view engine", "hbs");

// app.engine(
//   "hbs",
//   hbs({
//     extname: "hbs",
//     defaultView: "default",
//     layoutsDir: __dirname + "/views/pages/",
//     partialsDir: __dirname + "/views/partials/"
//   })
// );

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/project-api-routes.js")(app);
require("./routes/passport-api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
