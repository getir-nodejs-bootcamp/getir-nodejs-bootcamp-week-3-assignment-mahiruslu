const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    console.log(req.headers);
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        jwt.verify(req.token, 'secretkey', (err, authData) => {
            if (err) {
                res.sendStatus(403);
            } else {
                req.authData = authData;
                next();
            }
        });
        console.log("token: "+bearerToken);
    } else {
        res.sendStatus(403);
    }
};

module.exports = verifyToken;