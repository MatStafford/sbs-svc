const constants = require('../constants/constants');
const service = require('../services/user-service');

module.exports.createUser = async (req, res, next) => {
    let responseObj = <any>{};
    try {
        let data = req.body;
        console.log('req.body', req.body);

        // call service with data
        let responseFromService =  await service.createUser(data);
        switch(responseFromService.status) {
            case constants.serviceStatus.USER_CREATED_SUCCESSFULLY:
                responseObj.status = 200;
                responseObj.message = constants.serviceStatus.USER_CREATED_SUCCESSFULLY;
                responseObj.body = responseFromService.body;
                break;
            default:
                responseObj = constants.responseObj;
                break;
        }
        return res.status(responseObj.status).send(responseObj)
    } catch(err) {
        console.log('Something went wrong in Controller: create user', err);
        let responseObj = constants.responseObj;
        return res.status(responseObj.status).send(responseObj);
    }
};

module.exports.getUserList = async (req, res, next) => {
    let responseObj = <any>{};
    try {
        let data = {
            skip: req.query.skip,
            limit: req.query.limit
        };

        // call service with data
        let responseFromService =  await service.getUserList(data);
        switch(responseFromService.status) {
            case constants.serviceStatus.USER_LIST_FETCHED_SUCCESSFULLY:
                responseObj.status = 200;
                responseObj.message = constants.serviceStatus.USER_LIST_FETCHED_SUCCESSFULLY;
                responseObj.body = responseFromService.body;
                break;
            default:
                responseObj = constants.responseObj;
                break;
        }
        return res.status(responseObj.status).send(responseObj)
    } catch(err) {
        console.log('Something went wrong in Controller: get user list', err);
        let responseObj = constants.responseObj;
        return res.status(responseObj.status).send(responseObj);
    }
};

module.exports.getUserDetail = async (req, res, next) => {
    let responseObj = <any>{};
    try {
        let data = {
            userId: req.params.userId
        };

        // call service with data
        let responseFromService =  await service.getUserDetail(data);
        switch(responseFromService.status) {
            case constants.serviceStatus.USER_FETCHED_SUCCESSFULLY:
                responseObj.status = 200;
                responseObj.message = constants.serviceStatus.USER_FETCHED_SUCCESSFULLY;
                responseObj.body = responseFromService.body;
                break;
            default:
                responseObj = constants.responseObj;
                break;
        }
        return res.status(responseObj.status).send(responseObj)
    } catch(err) {
        console.log('Something went wrong in Controller: get user detail', err);
        let responseObj = constants.responseObj;
        return res.status(responseObj.status).send(responseObj);
    }
};