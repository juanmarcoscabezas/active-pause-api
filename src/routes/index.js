const routes = require('express').Router();
const authRoutes = require('./user.routes');
const playListRoutes = require('./pause.routes');

routes.use('/auth', authRoutes);

module.exports = routes;