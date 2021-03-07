const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const port = process.env.PORT || 3000;
const clashRoyale = require("./routes/clashRoyale");
const brawlStars = require("./routes/brawlStars");
const clashOfClans = require("./routes/clashOfClans");
const hypixel = require("./routes/hypixel");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 2 * 60 * 1000, // 2 minutes
  max: 50, // limit each IP to 50 requests per 2 mins
  message: {
    message: "Rate Limit Reached, Please try agian later.",
  },
});

//  apply to all requests
app.use(limiter);


app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/v1/clash_royale", clashRoyale);
app.use("/api/v1/brawl_stars", brawlStars);
app.use("/api/v1/clash_of_clans", clashOfClans);
app.use("/api/v1/hypixel", hypixel);


app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}/`)
);
