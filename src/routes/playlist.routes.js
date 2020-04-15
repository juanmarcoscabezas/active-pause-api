const PlaylistController = require('../controllers/playlist.controller');
const playlistRoutes = require('express').Router();
const { isAuth } = require('../tools/auth.handler');

playlistRoutes.get('/', isAuth, async (req, res) => {
    response = await PlaylistController.listAll();
    res.send(response);
});

playlistRoutes.get('/:id', isAuth, async (req, res) => {
    const response = await PlaylistController.getPlaylist(req.params.id);
    res.send(response);
});

playlistRoutes.post('/', isAuth, async (req, res) => {
    const response = await PlaylistController.createPlaylist(req.body);
    res.send(response);
});

playlistRoutes.put('/:id', isAuth, async (req, res) => {
    const response = await PlaylistController.updatePlaylist(req.params.id, req.body);
    res.send(response);
});

playlistRoutes.delete('/:id', isAuth, async (req, res) => {
    const response = await PlaylistController.removePlaylist(req.params.id);
    res.send(response);
});

playlistRoutes.post('/add-exercise/:id', isAuth, async (req, res) => {
    const response = await PlaylistController.addExercise(req.params.id, req.body);
    res.send(response);
});

playlistRoutes.delete('/remove-exercise/:id', isAuth, async (req, res) => {
    const response = await PlaylistController.removeExercise(req.params.id, req.body);
    res.send(response);
});

module.exports = playlistRoutes;