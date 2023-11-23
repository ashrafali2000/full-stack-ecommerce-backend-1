const jwt = require("jsonwebtoken");
const { jwtSecretKey } = require("../constants/constant");

const verifyToken = (req, res, next) => {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
  jwt.verify(token, jwtSecretKey, function(err, decoded) {
      if(err){
   return res.status(401).send({message:"Unauthorized", err})
    }
   return next()
  })
};
module.exports = verifyToken;
