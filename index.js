const Happi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Happi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route(routes);

    await server.start();
    console.log('Server runing on %s', server.info.uri);
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();