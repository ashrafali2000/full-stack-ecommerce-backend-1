 const User = require("../models/user");
 const bcrypt = require("bcrypt");
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

 const userFind = async (data) => {
        const found = await User.findOne({email:data.email});
        if(found){
        return "Login Successfull";
        }
 }
module.exports = {createUser, userFind};