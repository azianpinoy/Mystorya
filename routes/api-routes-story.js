var db = require("../models");
var fs = require("fs");

module.exports = function(app) {
  app.get("/api/user", function(req, res) {
    db.User.findAll({
      include: [db.Story]
    }).then(function(result) {
      res.json(result);
    });
  });

  app.get("/api/user/id/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Story]
    }).then(function(result) {
      res.json(result);
    });
  });

  app.get("/api/user/storyID/:storyID", function(req, res) {
    db.User.findOne({
      where: {
        userName: req.params.storyID,
      },
      include: [db.Story]
    }).then(function(result) {
      res.json(result);
    });
  });

  app.post("/api/storyID", function(req, res) {
    db.Story.create(req.body).then(function(result) {
      res.json(result);
    });
  });

  app.put("/api/storyID", function(req, res) {
    db.User.update(req.body)
    .then(function(result) {
      res.json(result);
    });
  });
};