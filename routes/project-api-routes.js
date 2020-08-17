// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the projects
  app.get("/api/projects", (req, res) => {
    const query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Project.findAll({
      where: query,
      include: [db.User]
    }).then(dbProject => {
      res.json(dbProject);
    });
  });

  // Get route for retrieving a single project
  app.get("/api/projects/:id", (req, res) => {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Project.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(dbProject => {
      res.json(dbProject);
    });
  });

  // POST route for saving a new project
  app.post("/api/projects", (req, res) => {
    db.Project.create(req.body).then(dbProject => {
      res.json(dbProject);
    });
  });

  // DELETE route for deleting projectts
  app.delete("/api/projects/:id", (req, res) => {
    db.Project.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbProject => {
      res.json(dbProject);
    });
  });

  // PUT route for updating projects
  app.put("/api/projects", (req, res) => {
    const project = req.body;
    db.Project.update(
      {
        title: project.title,
        description: project.description,
        language: project.language
      },
      {
        where: {
          id: req.project.id
        }
      }
    );
    res.json();
  });
};
