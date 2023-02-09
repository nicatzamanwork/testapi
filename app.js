const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
//import routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

//routes
app.get("/", (req, res) => {
  res.send("we are on home");
});

//connect to db
mongoose.connect(
  "mongodb+srv://nijatzaman:1234_Jerusalem@cluster0.loje51j.mongodb.net/ToDo",
  () => {
    console.log("connected to DB");
  }
);
app.listen(3000);
