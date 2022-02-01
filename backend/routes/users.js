const express = require("express");
const router = express.Router();

// const { getAllUsers } = requre("../db/dbHelpers");

router.get("/", function(req, res){
  res.status(200).json("user 1");
});

module.exports = router;