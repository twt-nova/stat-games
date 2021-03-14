const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const config = {
  timestamp: {
    type: Date,
    default: Date.now,
  },
  path: {
    type: String,
    required: true,
  },
};

const StatScheme = new Schema(config);

module.exports = mongoose.model("Stat", StatScheme);
