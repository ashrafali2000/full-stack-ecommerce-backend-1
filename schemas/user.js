const mongoose = require("mongoose");
const { Schema } = mongoose;
const Joi = require("joi")

const joiUSerSchema = Joi.object({
    name:Joi.string().required().min(7),
    email:Joi.string().required().email(),
    phone:Joi.number().optional().max(10),
    password:Joi.string().min(6).required()
})

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
        require:true,
    }
 })

 module.exports = {UserSchema, joiUSerSchema}