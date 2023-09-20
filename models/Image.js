const mongoose = require("mongoose");

const ImageShema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    maxlength: 50,
  },
  img: {
    type: String,
    required: [true, "Please provide image url"],
  },
  tag: {
    type: String,
    required: [true, "Please provide tag"],
    maxlength: 50,
  },
});

module.exports = mongoose.model("Image", ImageShema);
