const Joi = require('joi');
const createUserSchema = Joi.object().keys({
    name: Joi.string().required(),
    password: Joi.string().required()
});
const getUserListQuerySchema = Joi.object().keys({
    skip: Joi.string().optional(),
    limit: Joi.string().optional()
}).and('skip', 'limit');
const getUserDetailPathParamSchema = Joi.object().keys({
    userId: Joi.string().required()
});
module.exports = {
    'createUserSchema': createUserSchema,
    'getUserListQuerySchema': getUserListQuerySchema,
    'getUserDetailPathParamSchema': getUserDetailPathParamSchema
};
//# sourceMappingURL=user-schema.js.map