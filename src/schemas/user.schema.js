const Joi = require('@hapi/joi');

module.exports.SignupSchema =  Joi.object({
    firstName: Joi.string()
        .max(40)
        .required(),

    lastName: Joi.string()
        .max(40)
        .required(),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),

    password: Joi.string()
        .min(6)
        .max(30)
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),

    imageUrl: Joi.string()
});

module.exports.LoginSchema = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com'] } })
        .required(),

    password: Joi.string()
        .required()
});
