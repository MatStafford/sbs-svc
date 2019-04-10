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

// can be used by multiple modules and services
module.exports.insertData = (data) => {
    return new Promise((resolve, reject) => {
        try{
            data.model.save().then(docs => {
                // success
                resolve({
                    result: docs,
                    status: constants.databaseStatus.ENTITY_CREATED
                })
            }).catch(err => {
                // error
                reject({
                    error: err.message,
                    status: constants.databaseStatus.DATABASE_ERROR
                })
            })
        }catch(err) {
            console.log('Something went wrong: CrudRepo: insert', err)
        }
    })
};

module.exports.find = (data) => {
    return new Promise((resolve, reject) => {
        try{
            data.model.find(data.qeury, data.excludeFields, data.pagination).then(docs => {
                // success
                resolve({
                    result: docs,
                    status: constants.databaseStatus.ENTITY_FETCHED
                })
            }).catch(err => {
                // error
                reject({
                    error: err.message,
                    status: constants.databaseStatus.DATABASE_ERROR
                })
            })
        }catch(err) {
            console.log('Something went wrong: CrudRepo: find', err)
        }
    })
}