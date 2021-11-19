const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UsersSchema = require("./routes/users");
const app = express();
const ChannelSchema = require("./routes/channels");

app.use(express.json());
app.use(cors());

app.use("/api", UsersSchema);
app.use("/api", ChannelSchema);

mongoose.connect(
  "mongodb+srv://giga:vivomini@rest.nl9di.mongodb.net/testdb?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const PORT = 3000;

app.listen(PORT, () => {
  console.log("server started");
});
