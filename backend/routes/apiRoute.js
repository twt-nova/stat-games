const express = require("express");
const router = express.Router();

//api/clashroyale
router.get("/clashroyale", (req, res) => {
  res.json({ msg: "Just testing" });
});

module.exports = router;
