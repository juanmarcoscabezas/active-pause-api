module.exports = {
    "dev": {
        "mongoUrl": process.env.MONGOURL || "mongodb://localhost:27017/activepause",
        "host": process.env.HOST || "localhost",
        "port": process.env.PORT || 3010,
        "secretKey": process.env.SECRET || "my-secret-key",
        "accessToken": {
            algorithm: 'HS256',
            expiresIn: '1m'
        },
        "refreshToken": {
            algorithm: 'HS256',
            expiresIn: '7d'
        }
    }
}