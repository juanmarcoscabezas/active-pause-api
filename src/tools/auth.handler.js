const { verifyAccessToken } = require('./token.handler');
const BoomError = require('./BoomError');
const Boom = require('@hapi/boom');

authHandler = {};

authHandler.isAuth = async (req, res, next) => {
    try {
        const accessToken = req.headers.authorization.split(' ')[1];
        const validToken = await verifyAccessToken(accessToken);
        req.userEmail = validToken.email;
        next();
    } catch (error) {
        return res.send(BoomError(Boom.unauthorized('Invalid access token')));
    }
};

module.exports = authHandler;