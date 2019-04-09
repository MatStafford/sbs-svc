const constants = require('../constants/constants');

module.exports.createUser = (req, res, next) => {
    try {
        let responseObj = <any>{};

        let data = req.body;
        console.log('req.body', req.body);
        // call service with data

        let responseFromService = {
            status: constants.serviceStatus.USER_CREATED_SUCCESSFULLY,
            body: {
                id: '12345',
                name: 'Users Name',
                password: 1111,
                phone: '999-999-9999'
            }
        };
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
        res.status(responseObj.status).send(responseObj)
    } catch(err) {
        console.log('Something went wrong in Controller: create user', err);
        let responseObj = constants.responseObj;
        return res.status(responseObj.status).send(responseObj);
    }
};