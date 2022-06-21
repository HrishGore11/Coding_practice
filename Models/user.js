const Mongoose = require("mongoose");
const UserSchema = new Mongoose.Schema({
  Name: String,
  Email: String,
  Password: String,
});

const User = Mongoose.model("user", UserSchema);
module.exports = User;
