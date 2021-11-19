const router = require("express").Router();
const UserSchema = require("../../models/users/index.model");
const ChannelSchema = require("../../models/channels/index.model");

router.route("/get/users").get(async (req, res) => {});

router.route("/add/user").post(async (req, res) => {
  try {
    const newUser = new UserSchema(req.body);

    newUser.save().then(() => {
      res.json({ success: true, msg: "წარმატებით დაემატა მომხმარებელი!" });
    });
  } catch (err) {
    res.json(err);
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
          res.json({ success: true, msg: "დაფიქსირდა შეცდომა!" });
        }
      });
    });
  } catch (err) {
    res.status(502).json(err);
  }
});

module.exports = router;
