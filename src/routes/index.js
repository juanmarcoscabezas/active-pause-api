const routes = require('express').Router();
const authRoutes = require('./user.routes');
const playlistRoutes = require('./playlist.routes');

routes.use('/auth', authRoutes);
routes.use('/playlists', playlistRoutes);

module.exports = routes;