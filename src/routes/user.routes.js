const UserController = require('../controllers/user.controller');

const authRoutes = require('express').Router();

authRoutes.post('/signup', async (req, res) => {
    const response = await UserController.signup(req.body);
    return res.send(response);
});

authRoutes.post('/login', async (req, res) => {
    const response = await UserController.login(req.body);
    return res.send(response);
});

authRoutes.post('/refreshToken', async (req, res) => {
    console.log('refresh');
    return res.send('todo bien');
});

module.exports = authRoutes;