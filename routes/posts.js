const express = require("express");
const Person = require("../modules/Post");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("We are on posts");
});

router.post("/", (req, res) => {
  const post = new Person({
    name: "a",
    // description: "a",
  });

  post.save();
});

module.exports = router;
