const Joi = require('joi');
const constants = require('../constants/constants');
let responseObj = {};
module.exports = {
    validateBody: (schema) => {
        return (req, res, next) => {
            const result = Joi.validate(req.body, schema);
            if (result.error) {
                console.log("result.error", result.error);
                responseObj.status = 400;
                responseObj.message = constants.controllerStatus.BAD_REQUEST;
                responseObj.body = result.error;
            }
            else {
                next();
            }
        };
    }
};
//# sourceMappingURL=joi-schema-validation.js.map