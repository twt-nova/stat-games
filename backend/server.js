const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const port = process.env.PORT || 5001;

const mongoose = require("mongoose");
require("./models/stats");

const logRequest = require("./routes/logRequest");
const clashRoyale = require("./routes/clashRoyale");
const brawlStars = require("./routes/brawlStars");
const clashOfClans = require("./routes/clashOfClans");
const genshinImpact = require("./routes/genshinImpact");
const hypixel = require("./routes/hypixel");
const pubg = require("./routes/pubg");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 2 * 60 * 1000, // 2 minutes
  max: 50, // limit each IP to 50 requests per 2 mins
  message: {
    message: "Rate Limit Reached, Please try again later.",
  },
});

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


mongoose.connection.on("error", function (e) {
  console.error(e);
});

//  apply to all requests
app.use(limiter);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(logRequest);
app.use("/v1/clash_royale", clashRoyale);
app.use("/v1/brawl_stars", brawlStars);
app.use("/v1/clash_of_clans", clashOfClans);
app.use("/v1/genshin_impact", genshinImpact);
app.use("/v1/hypixel", hypixel);
app.use("/v1/pubg", pubg);

app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}/`)
);
