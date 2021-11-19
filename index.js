const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const UsersRouter = require("./routes/users");
const RelatedRouter = require("./routes/news");
const TestRouter = require("./routes/relateds");

app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

app.use("/api", UsersRouter);
app.use("/api", RelatedRouter);
app.use("/api", TestRouter);

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
