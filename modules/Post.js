const { default: mongoose } = require("mongoose");
// const { Schema } = mongoose;

const personSchema = new mongoose.Schema({
  name: String,
});

const Person = mongoose.model("Person", personSchema);

module.exports = {
  Person,
};
