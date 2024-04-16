const express = require("express");
const router = express.Router();

// GET /
router.get("/", function (req, res, next) {
  res.render("index");
});

// GET /
router.get("/recenzije", function (req, res, next) {
  res.render("recenzije");
});
module.exports = router;
