const Joi = require('joi');
const createUserSchema = Joi.object().keys({
    name: Joi.string().required(),
    password: Joi.string().required()
});
const getUserListQuerySchema = Joi.object().keys({
    skip: Joi.string().optional(),
    limit: Joi.string().optional()
}).and('skip', 'limit');
module.exports = {
    'createUserSchema': createUserSchema,
    'getUserListQuerySchema': getUserListQuerySchema
};
//# sourceMappingURL=user-schema.js.map