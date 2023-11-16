const mongoose = require("mongoose");
const { Schema } = mongoose;
const Joi = require("joi")

const joiUSerSchema = Joi.object({
    firstName:Joi.string().required().min(7),
    lastName:Joi.string().required().min(7),
    email:Joi.string().required().email(),
    password:Joi.string().min(6).required()
})

 const UserSchema  = new Schema({
    firstName:{
        type:Schema.Types.String,
        require:true
    },
    lastName:{
        type:Schema.Types.String,
        require:true
    },
    email:{
        type:Schema.Types.String,
        require:true,
        unique:true
    },
    password:{
        type:Schema.Types.String,
        require:true,
    }
 })

 module.exports = {UserSchema, joiUSerSchema}