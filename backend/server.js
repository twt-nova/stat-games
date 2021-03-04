const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send({
    status: "ok",
  });
});

app.listen(3000, () => {
  console.log(`Listening at http://localhost:3000`);
});
