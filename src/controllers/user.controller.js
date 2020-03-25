const Boom = require('@hapi/boom');
const UserModel = require('../models/user.model');
const { SignupSchema, LoginSchema } = require('../schemas/user.schema');
const validSchema = require('../tools/validSchema');
const bcrypt = require('bcrypt');
const { createJWT } = require('../tools/jwt');

const userController = {};

userController.signup = async (user) => {
    try {
        const validation = SignupSchema.validate(user);

        if (validation.error) {
            error = validation.error.details[0].message;
            return Boom.badRequest(error);
        }

        userExists = await UserModel.findOne({'email': validation.value.email});

        if (userExists) {
            return Boom.badRequest('Email already exists');
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(validation.value.password, salt);
        validation.value.password = hash;
        const newUser = await UserModel.create(validation.value);
    
        return newUser;
    } catch (error) {
        return Boom.badRequest(error)
    }
}

userController.login = async (user) => {
    try {
        const validation = LoginSchema.validate(user);
        if (validation.error) {
            error = validation.error.details[0].message;
            return Boom.badRequest(error);
        }

        userExists = await UserModel.findOne({'email': validation.value.email});

        if (!userExists) {
            return Boom.badRequest('User does not exist');
        }
        
        const validPassword = await bcrypt.compare(validation.value.password, userExists.password);

        if (!validPassword) {
            return Boom.badRequest('Invalid password');
        }

        token = createJWT(userExists);

        return { token };
    } catch (error) {
        return Boom.badRequest(error)
    }
}

userController.changePassword = async (user) => {
    try {
        // To be implemented
        return "success";
    } catch (error) {
        return Boom.badRequest(error)
    }
}

module.exports = userController;