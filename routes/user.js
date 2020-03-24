userRoutes = [];

login = {
    method: 'GET',
    path: '/auth/login',
    handler: (request, h) => {
        return  'Hello USER';
    }
}

signup = {
    method: 'GET',
    path: '/auth/signup',
    handler: (request, h) => {
        return  'Welcome USER';
    }
}


userRoutes.push(login);
userRoutes.push(signup);

module.exports = userRoutes;