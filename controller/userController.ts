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