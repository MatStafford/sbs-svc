const Joi = require('joi');
const constants = require('../constants/constants');
let responseObj = <any>{};

module.exports = {
    validateBody: (schema) => {
        return (req, res, next) => {
            const result = Joi.validate(req.body, schema);
            if(result.error) {
                console.log("result.error", result.error);
                let errorDetail = result.error.details.map((value) => {
                  return {
                      error: value.message,
                      path: value.path
                  }
                });
                responseObj.status = 400;
                responseObj.message = constants.controllerStatus.BAD_REQUEST;
                responseObj.body = errorDetail;
                return res.status(responseObj.status).send(responseObj);
            } else {
                next();
            }
        }

    },

    validateQueryParams: (schema) => {
        return (req, res, next) => {
            const result = Joi.validate(req.query, schema);
            if(result.error) {
                console.log("result.error", result.error);
                let errorDetail = result.error.details.map((value) => {
                    return {
                        error: value.message,
                        path: value.path
                    }
                });
                responseObj.status = 400;
                responseObj.message = constants.controllerStatus.BAD_REQUEST;
                responseObj.body = errorDetail;
                return res.status(responseObj.status).send(responseObj);
            } else {
                next();
            }
        }

    }
};