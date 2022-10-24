var express = require('express');
var mysql = require('mysql');
var router = express.Router();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "secretpassword",
  database: "site_users"
});


/* GET users listing. */
router.get('/sqlServer', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/api/get", (req, res) => {
  db.query("SELECT * FROM user_info;", (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  }
  );
});

router.get("/create", function(req, res) {
  var sport = req.props.sport;
  var firstName = req.props.firstName;
  var userBio = req.props.userBio;
  db.query("INSERT INTO user_info (FirstName, UserBio, Sport) VALUES (?,?,?);", (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result);
  });
});






module.exports = router;
