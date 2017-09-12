var db = require("../models");

module.exports = function(app) {
  app.get("/api/user", function(req, res) {
    db.User.findAll({
      include: [db.Story]
    }).then(function(result) {
      res.json(result);
    });
  });

  app.get("/api/user/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Story]
    }).then(function(result) {
      res.json(result);
    });
  });

  app.post("/api/user", function(req, res) {
    db.User.create(req.body).then(function(result) {
      res.json(result);
    });
  });

  app.delete("/api/authors/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });

};