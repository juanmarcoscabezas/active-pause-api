const UserController = require('../controllers/user.controller');
const authRoutes = require('express').Router();
const {  } = require('../tools/auth.handler');

authRoutes.post('/signup', async (req, res) => {
    const response = await UserController.signup(req.body);
    return res.send(response);
});

authRoutes.post('/login', async (req, res) => {
    const response = await UserController.login(req.body);
    return res.send(response);
});

authRoutes.post('/refresh-token', async (req, res) => {
    const response = await UserController.refreshToken(req.body);
    return res.send(response);
});

module.exports = authRoutes;