const jwt = require('jsonwebtoken');

module.exports.createJWT = (user) => {
    return jwt.sign(
        {
            id: user._id,
            email: user.email
        }, 
        'secret',
        {
            algorithm: 'HS256',
            expiresIn: '1h'
        }
    );
}