var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const constants = require('../constants/constants');
const service = require('../services/user-service');
module.exports.createUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    let responseObj = {};
    try {
        let data = req.body;
        console.log('req.body', req.body);
        // call service with data
        let responseFromService = yield service.createUser(data);
        switch (responseFromService.status) {
            case constants.serviceStatus.USER_CREATED_SUCCESSFULLY:
                responseObj.status = 200;
                responseObj.message = constants.serviceStatus.USER_CREATED_SUCCESSFULLY;
                responseObj.body = responseFromService.body;
                break;
            default:
                responseObj = constants.responseObj;
                break;
        }
        return res.status(responseObj.status).send(responseObj);
    }
    catch (err) {
        console.log('Something went wrong in Controller: create user', err);
        let responseObj = constants.responseObj;
        return res.status(responseObj.status).send(responseObj);
    }
});
module.exports.getUserList = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    let responseObj = {};
    try {
        let data = {
            skip: req.query.skip,
            limit: req.query.limit
        };
        // call service with data
        let responseFromService = yield service.getUserList(data);
        switch (responseFromService.status) {
            case constants.serviceStatus.USER_LIST_FETCHED_SUCCESSFULLY:
                responseObj.status = 200;
                responseObj.message = constants.serviceStatus.USER_LIST_FETCHED_SUCCESSFULLY;
                responseObj.body = responseFromService.body;
                break;
            default:
                responseObj = constants.responseObj;
                break;
        }
        return res.status(responseObj.status).send(responseObj);
    }
    catch (err) {
        console.log('Something went wrong in Controller: get user list', err);
        let responseObj = constants.responseObj;
        return res.status(responseObj.status).send(responseObj);
    }
});
module.exports.getUserDetail = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    let responseObj = {};
    try {
        let data = {
            userId: req.params.userId
        };
        // call service with data
        let responseFromService = yield service.getUserDetail(data);
        switch (responseFromService.status) {
            case constants.serviceStatus.USER_FETCHED_SUCCESSFULLY:
                responseObj.status = 200;
                responseObj.message = constants.serviceStatus.USER_FETCHED_SUCCESSFULLY;
                responseObj.body = responseFromService.body;
                break;
            default:
                responseObj = constants.responseObj;
                break;
        }
        return res.status(responseObj.status).send(responseObj);
    }
    catch (err) {
        console.log('Something went wrong in Controller: get user detail', err);
        let responseObj = constants.responseObj;
        return res.status(responseObj.status).send(responseObj);
    }
});
//# sourceMappingURL=userController.js.map