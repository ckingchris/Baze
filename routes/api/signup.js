const router = require("express").Router();
const signupController = require("../../controllers/signupController");

// Matches with "/api/signup" - route for creating a new user 
router.route("/signup")
  .post(userController.create);

module.exports = router;