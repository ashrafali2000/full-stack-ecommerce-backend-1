const jwt = require("jsonwebtoken");
const { jwtSecretKey } = require("../constants/constant");

const verifyToken = (req, res, next) => {
  console.log("Res------->");
  jwt.verify(token, jwtSecretKey, function(err, decoded) {
    console.log(decoded.foo) // bar
  })
  next();
};
module.exports = verifyToken;
