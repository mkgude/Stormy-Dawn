const db = require("../models");

module.exports = function(app) {
  app.get("/api/users", (req, res) => {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Project
    db.User.findAll({
      // include: [db.Project]
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
      }
      // include: [db.Project]
    }).then(dbUser => {
      res.json(dbUser);
    });
  });

  // volunteer updates their user info (updated on volunteer profile page)
  app.put("/api/updateVolunteer", (req, res) => {
    // Take the request...
    const volunteerUser = req.body;

    // Then add the volunteerUser to the database using sequelize
    db.User.update(
      {
        name: volunteerUser.name,
        email: volunteerUser.email,
        languages: volunteerUser.languages,
        github: volunteerUser.github,
        biography: volunteerUser.biography,
        portfolio: volunteerUser.portfolio,
        linkedin: volunteerUser.linkedin
      },
      {
        where: {
          id: req.user.id
        }
      }
    );
    res.status(204).json(volunteerUser);
  });

  // npo updates user info
  app.put("/api/updateNpo", (req, res) => {
    // Take the request...
    const npoUser = req.body;

    // Then add the npoUser to the database using sequelize
    db.User.update(
      {
        name: npoUser.name,
        email: npoUser.email,
        languages: npoUser.languages,
        biography: npoUser.biography,
        website: npoUser.website
      },
      {
        where: {
          id: req.user.id
        }
      }
    );
    res.status(204).json(npoUser);
  });

  // PHASE 2
  // npo adds review to volunteer info
  // review is posted to volunteer profile page
};
