const db = require("../models");

// Defining methods for the loginController
module.exports = {

  findByName: function(req, res) {
    db.User
      .findByName(req.params.name, req.params.password)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

};
