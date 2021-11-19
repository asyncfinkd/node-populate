const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const AllcommentsSchema = mongoose.Schema({
  comment: { type: String },
});

const CommentSchema = mongoose.Schema({
  allComments: [AllcommentsSchema],
});

module.exports = mongoose.model("comments", CommentSchema);
