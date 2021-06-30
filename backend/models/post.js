const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  language: { type: String, required: true },
  genre: { type: String, required: true },
  author: { type: String, required: true },
  imagePath: { type: String, required: true },
  bookPath: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
  
});

module.exports = mongoose.model("Post", postSchema);
