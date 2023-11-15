const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//  Create User
const createUser = async (data) => {
  try {
    const hashPassword = await bcrypt.hash(data.password, 12);
    const user = new User({ ...data, password: hashPassword });
    await user.save();
    return "User Created Successfully";
  } catch (err) {
    return "User Already Exist";
  }
};

// Login User
const loginUser = async (data) => {
  try {
    const { email, password } = data;
    const userFound = await User.findOne({ email }).then(res => res.toObject());
    if (userFound) {
      const comparePassword = await bcrypt.compare(
        password,
        userFound.password
      );
      if (comparePassword) {
        delete userFound.password;
        return ("Login Successful", userFound);
      } else if (!comparePassword) {
        throw new Error("Incorrect Password");
      }
    }
    throw new Error("User not Found");
  } catch (err) {
    throw err;
  }
};
module.exports = { createUser, loginUser };
