const mongoose = require("mongoose");
const { Schema } = mongoose;
 const UserSchema  = new Schema({
    name:{
        type:Schema.Types.String,
        require:true
    },
    email:{
        type:Schema.Types.String,
        require:true,
        unique:true
    },
    phone:{
        type:Schema.Types.Number,
        require:true
    },
    password:{
        type:Schema.Types.String,
        require:true
    }
 })

 const User = mongoose.model("User", UserSchema);

 module.exports = User