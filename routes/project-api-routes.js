// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the projects
  app.get("/api/projects", function (req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Project.findAll({
      where: query,
      include: [db.User]
    }).then(function (dbProject) {
      res.json(dbProject);
    });
  });

  // Get route for retrieving a single project
  app.get("/api/projects/:id", function (req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Project.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function (dbProject) {
      res.json(dbProject);
    });
  });

  // POST route for saving a new project
  app.post("/api/projects", function (req, res) {
    db.Project.create(req.body).then(function (dbProject) {
      res.json(dbProject);
    });
  });

  // DELETE route for deleting projectts
  app.delete("/api/projects/:id", function (req, res) {
    db.Project.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbProject) {
      res.json(dbProject);
    });
  });

  // PUT route for updating projects
  app.put("/api/projects", function (req, res) {
    db.Project.update(
      req.body, {
        where: {
          id: req.body.id
        }
      }).then(function (dbProject) {
      res.json(dbProject);
    });
  });
};