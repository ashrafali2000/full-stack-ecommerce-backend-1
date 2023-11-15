 const User = require("../models/user");
 const bcrypt = require("bcrypt");

//  Create User
 const createUser = async (data) => {
    try{
        const hashPassword = await bcrypt.hash(data.password, 12)
        const user = new User({...data, password: hashPassword});
         await user.save();
         return "User Created Successfully"
    }catch(err){
        return "User Already Exist";
    }
 }

// Login User
 const loginUser = async (data) => {
    try{
        const found = await User.findOne({email:data.email});
        if(found){
        return "Login Successful";
        } else{
            throw new Error("User not Found");
        }
    }catch(err){
      throw err;
    }
 }
module.exports = {createUser, loginUser};