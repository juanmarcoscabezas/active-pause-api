const routes = require('express').Router();

const authRoutes = require('./user.routes');
const playlistRoutes = require('./playlist.routes');
const exerciseRoutes = require('./exercise.routes');

routes.use('/auth', authRoutes);
routes.use('/playlist', playlistRoutes);
routes.use('/exercise', exerciseRoutes);

module.exports = routes;