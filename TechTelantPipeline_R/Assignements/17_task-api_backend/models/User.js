/**
 *
 * In models/User.js, define a User with name, email, and password.
 * Add validation: the email must be a real email,
 * the name can't be empty, and the password must be at least 8
 * characters.
 */

const { DataTypes } = require("sequelize");
const db = require("./../db");

const User = db.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: {
        errorMsg: "Not a valid Email.",
      },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [8, 100],
        errorMsg: "Password must be at least 8 characters.",
      },
    },
  },
});

module.exports = User;
