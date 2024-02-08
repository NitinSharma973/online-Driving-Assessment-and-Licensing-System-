const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  address: String,
  contact: String,
  email: { type: String, unique: true },
  password: String,
  documents: {
    identificationProof: String,
    photograph: String,
  },
});

module.exports = mongoose.model("User", userSchema);
