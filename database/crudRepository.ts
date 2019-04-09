const mongoose = require('mongoose');
const constants = require('../constants/constants');

module.exports.createConnection = () => {
    return new Promise((resolve, reject) => {
        let responseObj = <any>{};
        mongoose.connect(process.env.DB_URL, {useNewUrlParser: true}, (err) => {
            if(err){
                responseObj.status = constants.databaseStatus.DATABASE_ERROR;
                console.log('responseObject: ', responseObj);
                return reject(responseObj);
            } else {
            responseObj.status = constants.databaseStatus.DATABASE_CONNECTED;
                console.log('responseObject: ', responseObj);
                return resolve(responseObj);
            }
        })
    })
};