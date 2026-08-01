const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

// static signup method
userSchema.statics.signup = async function (email, password) {
  // validationg
  if (!email || !password) {
    throw Error("All fields must be filled.");
  }
  // is valid email
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid.");
  }

  // is strong password
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough.");
  }

  // check email exist or not
  const exist = await this.findOne({ email });
  if (exist) {
    throw Error("Email already in use.");
  }
  // salt is random string char that is added for extra security
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All field must be filled.");
  }

  // check email exist or not
  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect Email.");
  }

  // match the password -
  const match = await bcrypt.compare(password, user.password); // return boolean

  if (!match) {
    throw Error("Incorrect Password.");
  }

  // if email and password match
  return user;
};

module.exports = mongoose.model("User", userSchema);
