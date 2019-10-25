var mongoose = require("mongoose");
var bcrypt = require("bcrypt");

var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: { type: String, required: true, match: /@/ },
  password: { type: String, required: true }
});

module.exports = mongoose.model("User", userSchema);
