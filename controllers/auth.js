const { createUsers, findUser } = require("../models/auth")
const {uid} = require("uid/secure")
const bcrypt = require("bcrypt")
const createUser = async(firstName, lastName, email, password) => {
  try{
  const userId = uid(16) 
  const hashPassword = await bcrypt.hash(password, 10);
  return await createUsers(userId, firstName, lastName, email, hashPassword)
}catch(err){
 throw err
}
}

const login = async(email, password) => {
try{
  const found = await findUser(email);
  const matched = await bcrypt.compare(password, found.password)
  if(found.email === email && matched){
   return "login sucessfull"
  }else{
    return "icorrect email  id or passwrod"
  }
}catch(err){
  throw err;
}
}
module.exports = {createUser, login}