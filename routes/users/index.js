const router = require("express").Router();
const UserSchema = require("../../models/users/index.model");

router.route("/get/users").get(async (req, res) => {
  try {
    await UserSchema.find()
      .populate({
        path: "followedChannel",
        populate: {
          path: "comments",
          populate: {
            path: "author",
          },
        },
      })
      .then((result) => {
        res.json({ success: true, item: result });
      });
  } catch (err) {
    res.json({ success: false, msg: "Sorry, Something is wrong.", err });
  }
});

router.route("/add/user").post(async (req, res) => {
  try {
    const newUser = new UserSchema(req.body);

    await newUser.save().then(() => {
      res.json({
        success: true,
        msg: "Congratulation, User is added successfuly.!",
      });
    });
  } catch (err) {
    res.json({ success: false, err, msg: "Sorry, Something is wrong." });
  }
});

router.route("/follow/channel").post(async (req, res) => {
  try {
    const { channelId, userId } = req.body;

    await UserSchema.findById(userId).then((result) => {
      const data = result.followedChannel;
      data.push(channelId);

      result.followedChannel = data;
      result.save((err, doc) => {
        if (!err) {
          res.json({
            success: true,
            msg: "Congratulation, You Followed Company",
          });
        } else {
          res.json({ success: false, msg: "Sorry, Something is wrong." });
        }
      });
    });
  } catch (err) {
    res.status(502).json(err);
  }
});

module.exports = router;
