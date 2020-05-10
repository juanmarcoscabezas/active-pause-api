const Joi = require('@hapi/joi');

module.exports.ExerciseSchema =  Joi.object({
    name: Joi.string()
        .max(40)
        .required(),
    description: Joi.string()
        .max(200)
        .required(),
    imageUrl: Joi.string()
        .optional()
});