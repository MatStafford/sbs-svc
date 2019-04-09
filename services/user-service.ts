const constants = require('constants');
const User = require('../models/db/user-model');

module.exports.createUser = async(serviceData) => {
    let responseObj = {};
    try{
        const user = new User({
            name: serviceData.name,
            password: serviceData.password
        })

    }catch(err) {

    }
};