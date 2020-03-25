const UserController = require('../controllers/user.controller');

userRoutes = [];

signup = {
    method: 'POST',
    path: '/auth/signup',
    config: {
        auth: false
    },
    handler: (request, h) => {
        const response = UserController.signup(request.payload);
        return  response;
    }
}

login = {
    method: 'POST',
    path: '/auth/login',
    config: {
        auth: false
    },
    handler: (request, h) => {
        const response = UserController.login(request.payload);
        return  response;
    }
}

changePassword = {
    method: 'PUT',
    path: '/auth/changePassword',
    config: {
        auth: false
    },
    handler: (request, h) => {
        const response = UserController.changePassword(request.payload);
        return  response;
    }
}

userRoutes.push(signup);
userRoutes.push(login);

module.exports = userRoutes;