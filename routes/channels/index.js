const router = require("express").Router();
const ChannelSchema = require("../../models/channels/index.model");
const CommentsSchema = require("../../models/comments/index.model");
const mongoose = require("mongoose");

router.route("/add/channel").post(async (req, res) => {
  try {
    const newChannel = await new ChannelSchema(req.body);

    await newChannel.save((err) => {
      if (!err) {
        res.json({ success: true, msg: "Congratulation, Channel is Added!" });
      } else {
        res.json({ success: true, msg: "Sorry, Something is wrong." });
      }
    });
  } catch (err) {
    res.status(502).json(err);
  }
});

router.route("/add/channel/comment").post(async (req, res) => {
  try {
    const newComment = new CommentsSchema(req.body);

    newComment.save((err, doc) => {
      if (!err) {
        ChannelSchema.findByIdAndUpdate(
          { _id: req.body.channelId },
          { $push: { comments: doc._id } },
          (err) => {
            if (!err) {
              res.json({
                success: true,
                msg: "Congratulation, Comment is added",
              });
            } else {
              res.json({
                success: false,
                msg: "Sorry, Something is wrong.",
                err,
              });
            }
          }
        );
      } else {
        throw new Error("err");
      }
    });
  } catch (err) {
    res.json({ success: false, msg: "Sorry, something is wrong.", err });
  }
});

module.exports = router;
