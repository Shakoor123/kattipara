var express = require("express");
var router = express.Router();

/* GET home page. */
router.post("/", function (req, res, next) {
  try {
    username = req.body.username;
    password = req.body.password;
    if (
      username === process.env.user_name &&
      password === process.env.password
    ) {
      req.session.isAdmin = true;
      res.status(200).json("login success");
    } else {
      res.status(500).json("wrong username or passsword");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
