const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  fullName: String,
  phoneNumber: String,
  email: String,
  birthDate: Date,
  role: String,
  auth: Boolean,
  followedChannel: [{ type: mongoose.Schema.Types.ObjectId, ref: "channels" }],
});

module.exports = mongoose.model("users", UserSchema);
