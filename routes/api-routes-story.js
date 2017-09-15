var db = require("../models");
var fs = require("fs");

module.exports = function(app) {
	app.get("/api/story", function(req, res) {
	    db.User.findAll({
	      include: [db.User]
	    }).then(function(result) {
	      res.json(result);
    });
  });
}