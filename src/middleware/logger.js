const moment = require('moment');
const ip = require('ip');
const fs = require('fs');

const logger = (req, res, next) => {

    logtofile('usage.log', `${req.protocol}://${req.get('host')}${req.originalUrl} by ` +'\n'+ ip.address() +' - '+  moment().toDate() +'\n');

    next();
    };

function logtofile(file, data) {
    fs.appendFile(file, data, function (err) {
        if (err) throw err;
    });
}


module.exports = logger;