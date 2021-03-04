const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

const apiRoute = require("./routes/apiRoute");

app.use("/api", apiRoute);
app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}/`)
);
