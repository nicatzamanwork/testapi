const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv/config");
//Middlewares
// app.use("/posts", () => {
//   console.log("This is a middleware");
// });

const postsRoute = require("./routes/posts");
const specificRoute = require("./routes/posts");

app.get("/", (req, res) => {
  res.send("We are on home");
});
app.use("/posts", postsRoute);
// app.use("/", specificRoute);
//Routes

//COnnect To DB

mongoose.connect(
  "mongodb+srv://nijatzaman:1234_Jerusalem@cluster0.loje51j.mongodb.net/test",
  () => {
    console.log("connected to DB");
  }
);

app.listen(3000);
