var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.send({
    status: "Ok",
    game : "brawlStars"
  });
});

module.exports = router;