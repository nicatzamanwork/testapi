const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const post = process.env.PORT || 5000;

const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();

mongoose.connect(
  "mongodb+srv://nijatzaman:1234_Jerusalem@cluster0.loje51j.mongodb.net/GoalsDB"
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/goals", require("./routes/goalRoutes"));

app.use(errorHandler);
app.listen(post, () => console.log(`Server started on ${post}`));
