var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const constants = require('../constants/constants');
const User = require('../models/db/user-model');
const crudRepository = require('../database/crudRepository');
module.exports.createUser = (serviceData) => __awaiter(this, void 0, void 0, function* () {
    let responseObj = {};
    try {
        const user = new User({
            name: serviceData.name,
            password: serviceData.password
        });
        let data = {
            model: user
        };
        let responseFromDatabase = yield crudRepository.insertData(data);
        switch (responseFromDatabase.status) {
            case constants.databaseStatus.ENTITY_CREATED:
                responseObj.body = responseFromDatabase.result;
                responseObj.status = constants.serviceStatus.USER_CREATED_SUCCESSFULLY;
                break;
            default:
                responseObj = constants.responseObj;
                break;
        }
        return responseObj;
    }
    catch (err) {
        console.log('Something went wrong: Service: create user', err);
        return responseObj = constants.responseObj;
    }
});
//# sourceMappingURL=user-service.js.map