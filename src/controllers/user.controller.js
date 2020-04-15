const UserModel = require('../models/user.model');
const { SignupSchema, LoginSchema } = require('../schemas/user.schema');
const bcrypt = require('bcrypt');
const { createAccessToken, createRefreshToken, verifyToken } = require('../tools/token.handler');
const BoomError = require('../tools/BoomError');
const Boom = require('@hapi/boom');

const jwt = require('jsonwebtoken');
const { dev } = require('../config');

const userController = {};

userController.signup = async (user) => {
    try {
        const validation = SignupSchema.validate(user);

        if (validation.error) {
            error = validation.error.details[0].message;
            return BoomError(Boom.badRequest(error));
        }

        userExists = await UserModel.findOne({'email': validation.value.email});

        if (userExists) {
            return BoomError(Boom.badRequest('Email already exists'));
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(validation.value.password, salt);
        validation.value.password = hash;
        const newUser = await UserModel.create(validation.value);
    
        return newUser;
    } catch (error) {
        return BoomError(Boom.badRequest(error));
    }
}

userController.login = async (user) => {
    try {
        const validation = LoginSchema.validate(user);
        if (validation.error) {
            error = validation.error.details[0].message;
            return BoomError(Boom.badRequest(error));
        }

        userExists = await UserModel.findOne({'email': validation.value.email});

        if (!userExists) {
            return BoomError(Boom.badRequest('User does not exist'));
        }
        
        const validPassword = await bcrypt.compare(validation.value.password, userExists.password);

        if (!validPassword) {
            return BoomError(Boom.badRequest('Invalid password'));
        }

        const accessToken = createAccessToken(userExists);
        const refreshToken = createRefreshToken(userExists);

        return { accessToken, refreshToken };
    } catch (error) {
        return BoomError(Boom.badRequest(error));
    }
}

userController.refreshToken = (tokens) => {

    const encodedRefreshToken = tokens.accessToken;

    return jwt.verify(encodedRefreshToken, dev.secretKey, (errorRefreshToken, decodedRefreshToken) => {

        if (decodedRefreshToken) {
            const accessToken = createAccessToken(decodedRefreshToken);
            const refreshToken = createAccessToken(decodedRefreshToken);
            return {accessToken, refreshToken};
        } else {
            if (errorRefreshToken.message === 'jwt expired') {
                const decodedToken = jwt.decode(encodedRefreshToken)
                const accessToken = createAccessToken(decodedToken);
                const refreshToken = createRefreshToken(decodedToken);
                return {accessToken, refreshToken};
            } else {
                return BoomError(Boom.forbidden('Invalid refresh token'));
            }
        }
    });
}

userController.changePassword = async (user) => {
    try {
        // To be implemented
        return "success";
    } catch (error) {
        return BoomError(Boom.badRequest(error));
    }
}

module.exports = userController;