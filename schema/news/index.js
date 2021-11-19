const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const NewsSchema = mongoose.Schema({
  title: { type: String },
  relatedId: { type: mongoose.Schema.Types.ObjectId, ref: "relateds" },
});

module.exports = mongoose.model("news", NewsSchema);
