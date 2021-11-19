const router = require("express").Router();
const comments = require("../../schema/comments");
const RelatedsSchema = require("../../schema/relateds");
const users = require("../../schema/users");

router.route("/get/relateds").get(async (req, res) => {
  users
    .find()
    .populate({
      path: "followedNews.news",
      populate: {
        path: "relatedId",
        populate: {
          path: "allComments.comment",
        },
      },
    })
    .then((doc) => {
      res.json(doc);
    });
  //   comments.find().then((doc) => {
  //     console.log(doc);
  //   });
});

module.exports = router;
