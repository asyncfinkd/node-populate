const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const CommentsSchema = mongoose.Schema({
  comment: { type: mongoose.Schema.Types.ObjectId, ref: "comments" },
});

const RelatedsSchema = mongoose.Schema({
  description: String,
  allComments: [CommentsSchema],
});

module.exports = mongoose.model("relateds", RelatedsSchema);
