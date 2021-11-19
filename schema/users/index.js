const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const FollowedNews = mongoose.Schema({
  news: { type: mongoose.Schema.Types.ObjectId, ref: "news" },
});

const UsersSchema = mongoose.Schema({
  followedNews: [FollowedNews],
});

module.exports = mongoose.model("users", UsersSchema);
