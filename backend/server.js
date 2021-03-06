const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const port = process.env.PORT || 3000;
const clashRoyale = require("./routes/clashRoyale");
const brawlStars = require("./routes/brawlStars");
const clashOfClans = require("./routes/clashOfClans");
const cors = require("cors");


app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/v1/clash_royale", clashRoyale);
app.use("/api/v1/brawl_stars", brawlStars);
app.use("/api/v1/clash_of_clans", clashOfClans);

app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}/`)
);
