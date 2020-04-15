const jwt = require('jsonwebtoken');
const { dev } = require('../config');

tokenHandler = {};

tokenHandler.createAccessToken = (user) => {
    return jwt.sign(
        {
            id: user._id,
            email: user.email
        }, 
        dev.secretKey,
        {
            algorithm: 'HS256',
            expiresIn: '1m'
        }
    );
}

tokenHandler.createRefreshToken = (user) => {
    return jwt.sign(
        {
            id: user._id,
            email: user.email
        }, 
        dev.secretKey,
        {
            algorithm: 'HS256',
            expiresIn: '7d'
        }
    );
}

tokenHandler.verifyAccessToken = (token) => {
    return jwt.verify(
        token,
        dev.secretKey
    );
}

tokenHandler.decodeToken = (token) => {
    return jwt.decode(token);
}

module.exports = tokenHandler;