const router = require("express").Router();
const UserSchema = require("../../models/users/index.model");
const ChannelSchema = require("../../models/channels/index.model");

router.route("/get/users").get(async (req, res) => {});

router.route("/add/user").post(async (req, res) => {
  try {
    const newUser = new UserSchema(req.body);

    newUser.save().then(() => {
      res.json({
        success: true,
        msg: "Congratulation, User is added successfuly.!",
      });
    });
  } catch (err) {
    res.json({ success: false, err, msg: "Sorry, Soemthing is wrong." });
  }
});

router.route("/follow/channel").post(async (req, res) => {
  try {
    const { channelId, userId } = req.body;

    await UserSchema.findById(userId).then((res) => {
      followChannel.save((err, doc) => {
        if (!err) {
          res.json({ success: true, msg: "" });
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
