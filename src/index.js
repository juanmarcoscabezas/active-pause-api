const Happi = require('@hapi/hapi');
const routes = require('./routes');
const { validate } = require('./tools/validate');

const init = async () => {
    const server = new Happi.server(
        {
            port: 3000,
            host: 'localhost',
            routes: {
                security: true,
                cors: {
                    origin: ['*'],
                    additionalHeaders: [
                        'Content-Type',
                        'Authorization'
                    ]
                }
            }
        }
    );

    await server.register(require('hapi-auth-jwt2'));

    server.auth.strategy('jwt', 'jwt', {
        key: 'secret',
        validate,
        verifyOptions: {
            algorithms: ['HS256']
        }
    });


    server.auth.default('jwt');
    


    require('./db');

    server.route(routes);
    await server.start();
    return server;
}

init()
.then(server => {
    console.log('Server runing on %s', server.info.uri);
})
.catch(err => {
    console.log(err);
});