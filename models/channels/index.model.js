const mongoose = require("mongoose");

const ChannelSchema = mongoose.Schema({
  name: String,
  description: String,
  url: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comments" }],
});

module.exports = mongoose.model("channels", ChannelSchema);
