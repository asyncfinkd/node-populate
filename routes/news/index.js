const router = require("express").Router();
const NewsSchema = require("../../schema/news");
const relateds = require("../../schema/relateds");

router.route("/get/related").get(async (req, res) => {
  NewsSchema.findOne()
    .populate("relatedId", "-_id")
    .then((doc) => {
      console.log(doc);
      res.json(doc);
    });
  //   relateds.findOne().then((result) => {
  //     console.log(result);
  //   });
});

module.exports = router;
