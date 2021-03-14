const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const StatModel = mongoose.model("Stat");

router.use(async function (req, res, next) {
  res.on("finish", () => {
    const stat = StatModel({
      path: req.originalUrl,
    });
    const d = stat.save();
    if (d.status != 200) {
      console.error(d);
    }
  });
  next();
});

router.get("/v1/stats/", async (req, res) => {
  const data = await StatModel.find();
  if (!data) {
    return res.send({ success: false, cause: "Could Not get data" });
  }
  let games = [
    { name: "hypixel" },
    { name: "clash_royale"},
    { name: "clash_of_clans"},
    { name: "brawl_stars"},
  ];

  for (let game in games) {
      game = games[game]
      let x = 0;
      for (let i in data) {
        i = data[i];
        if (i.path.includes(game.name)) {
          x++;
        }
      }
      game.amount = x
  }
  res.send({
    success: true,
    total: data.length,
    games: games,
  });
});

router.get("/v1/stats/:game", async (req, res) => {
  const game = req.params.game;
  const data = await StatModel.find({});

  if (!data) {
    return res.send({ success: false, cause: "Could Not get data" });
  }

  let x = 0;
  for (let i in data) {
    i = data[i];
    if (i.path.includes(game)) {
      x++;
    }
  }

  res.send({
    success: true,
    total: x,
  });
});

module.exports = router;
