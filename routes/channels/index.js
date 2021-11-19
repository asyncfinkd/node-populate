const router = require("express").Router();
const ChannelSchema = require("../../models/channels/index.model");

router.route("/add/channel").post(async (req, res) => {
  try {
    const newChannel = await new ChannelSchema(req.body);

    await newChannel.save((err, doc) => {
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

module.exports = router;
