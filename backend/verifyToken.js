const jwt = require("jsonwebtoken");

const verifyToken = function (req, res, next) {
    const token = req.cookies.token
    // base case
    if (!token) {
        return res.status(401).json("Sorry, You have not been authorized!")
    } else {
        jwt.verify(token, process.env.SECRET, async function (err, data) {
            if (err) {
                return res.status(403).json("Invalid Token")
            } else {
                return req.userId = data._id
                next();
            }
        });
    }

};

module.exports = verifyToken;