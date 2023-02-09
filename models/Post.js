const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Posts", PostSchema);
