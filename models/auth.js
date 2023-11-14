const path = require("path")
const fs = require("fs");
const userJsonFile = path.join(process.cwd(),"db", "user.json");

const readData = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(userJsonFile, "utf8", (err, userData) => {
            if(err){
                return reject(err);
            }
            resolve(JSON.parse(userData.toString()));
        })
    })
}

const writeData = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(userJsonFile, JSON.stringify(data), (err)=>{
            if(err){
                return reject(err)
            }
        resolve();
    })
})
}


const createUsers = async (userId, firstName, lastName, email, password) => {
    try{
        let { users } = await readData();
        const found = users.find(u => u.email === email);
        if(found){
            return "user already exist";
        }
        else{
            await writeData({users:[...users,{userId, firstName,lastName,email,password : password}]})
            return "user created sucessfully"
        }

    }catch(err){
     throw err
    }
}

const findUser = async (email) => {
    try{
        const {users} = await readData();
        const found = users.find(usr => usr.email === email)
        return found;
    }catch(err){ 
        throw err
    }
  
}

module.exports = {createUsers, findUser}