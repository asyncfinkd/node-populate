const router = require("express").Router();
const mongoose = require("mongoose");
const UsersSchema = require("../../schema/users");
const NewsSchema = require("../../schema/news");

router.route("/get/users/news").get(async (req, res) => {
  UsersSchema.find()
    .populate("followedNews.news")
    .select("-followedNews._id")
    .then((docs) => {
      res.json(docs);
    });
});

module.exports = router;
