 const User = require("../models/user");
 const createUser = async (data) => {
    try{
        const user = new User(data);
         await user.save();
         return "User Created Successfully"
    }catch(err){
        return "User Already Exist";
    }
 }
module.exports = {createUser};