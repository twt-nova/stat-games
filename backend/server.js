const express = require("express");
const app = express();
const cors = require("cors");
const brawlStars = require('./routers/brawlStars.js');
const clashOfClans = require('./routers/clashOfClans.js');
const clashRoyale = require('./routers/clashRoyale.js');
const hypixel = require('./routers/hypixel.js');

app.use(cors());
app.use('/brawlStars', brawlStars);
app.use('/clashOfClans', clashOfClans);
app.use('/clashRoyale', clashRoyale);
app.use('/hypixel', hypixel);

app.get("/", (req, res) => {
  res.send({
    status: "ok",
  });
});

app.listen(3000, () => {
  console.log(`Listening at http://localhost:3000`);
});
