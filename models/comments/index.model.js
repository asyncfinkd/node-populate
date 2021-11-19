const mongoose = require("mongoose");

const CommentsSchema = mongoose.Schema({
  comment: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});

module.exports = mongoose.model("comments", CommentsSchema);
