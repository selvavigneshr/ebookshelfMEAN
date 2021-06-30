const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const authorSchema = mongoose.Schema({
 
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

authorSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Author", authorSchema);
