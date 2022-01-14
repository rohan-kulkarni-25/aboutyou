const mongoose = require("mongoose");
// const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    maxlength: [40, "Name should be under 40 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    // validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  headline: {
    type: String,
    required: true,
  },
  bio: String,

  photo_id: String,
  photo_secure_URL: {
    type:String,
    required: true
  },

  github: String,
  twitter: String,
  linkedin: String,
  instagram: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
