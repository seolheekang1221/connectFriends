const express = require("express");
const router = express.Router();

// const { getFavorites } = requre("../db/dbHelpers");

router.get("/", function(req, res){
  res.status(200).json("user 1's favorites");
});

module.exports = router;