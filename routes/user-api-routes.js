const db = require("../models");

module.exports = function(app) {
  app.get("/api/users", (req, res) => {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Project
    db.User.findAll({
      include: [db.Project]
    }).then(dbUser => {
      res.json(dbUser);
    });
  });

  app.get("/api/users/:id", (req, res) => {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Project
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Project]
    }).then(dbUser => {
      res.json(dbUser);
    });
  });

  app.post("/api/users", (req, res) => {
    db.User.create(req.body).then(dbUser => {
      res.json(dbUser);
    });
  });

  app.delete("/api/users/:id", (req, res) => {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbUser => {
      res.json(dbUser);
    });
  });
  // If a user sends data to create a new user (volunteer)
  app.post("/api/addVolunteerUser", (req, res) => {
    // Take the request...
    const volunteerUser = req.body;

    // Create a routeName

    // Using a RegEx Pattern to remove spaces from volunteerUser.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    const routeName = volunteerUser.name.replace(/\s+/g, "").toLowerCase();

    // Then add the volunteerUser to the database using sequelize
    volunteerUser.create({
      routeName: routeName,
      name: volunteerUser.name,
      email: volunteerUser.email,
      languages: volunteerUser.languages,
      github: volunteerUser.github
    });

    res.status(204).end();
  });

  // If a user sends data to create a new user (npo)
  app.post("/api/addNpoUser", (req, res) => {
    // Take the request...
    const npoUser = req.body;

    // Create a routeName

    // Using a RegEx Pattern to remove spaces from npoUser.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    const routeName = npoUser.name.replace(/\s+/g, "").toLowerCase();

    // Then add the npoUser to the database using sequelize
    npoUser.create({
      routeName: routeName,
      name: npoUser.name,
      email: npoUser.email
    });

    res.status(204).end();
  });

  // volunteer updates their user info (updated on volunteer profile page)

  // npo updates user info
  // change/update profile info (updated on NPO profile page)

  // npo updates project info
  // adds user to team (updated on project page)
  // changes description of the project (updated on project page)

  // npo adds review to volunteer info
  // review is posted to volunteer profile page
};
