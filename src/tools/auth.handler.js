const { verifyToken } = require('./token.handler');
const BoomError = require('./BoomError');
const Boom = require('@hapi/boom');

authHandler = {};

authHandler.isAuth = async (req, res, next) => {
    try {
        const accessToken = req.headers.authorization.split(' ')[1];
        const validToken = await verifyToken(accessToken);
        req.userEmail = validToken.email;
        next();
    } catch (error) {
        if (error.message === 'jwt expired') {
            return res.send(BoomError(Boom.unauthorized('Expired access token')));
        }
        return res.send(BoomError(Boom.forbidden('Invalid access token')));
    }
};

module.exports = authHandler;