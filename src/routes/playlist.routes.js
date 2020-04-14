const PlaylistController = require('../controllers/playlist.controller');

const playlistRoutes = require('express').Router();

playlistRoutes.get('/', async (req, res) => {
    response = await PlaylistController.listAll();
    res.send(response);
});

playlistRoutes.get('/:id', async (req, res) => {
    const response = await PlaylistController.getPlaylist(req.params.id);
    res.send(response);
});

playlistRoutes.post('/', async (req, res) => {
    const response = await PlaylistController.createPlaylist(req.body);
    res.send(response);
});

playlistRoutes.put('/:id', async (req, res) => {
    const response = await PlaylistController.updatePlaylist(req.params.id, req.body);
    res.send(response);
});

playlistRoutes.delete('/:id', async (req, res) => {
    const response = await PlaylistController.removePlaylist(req.params.id);
    res.send(response);
});

playlistRoutes.post('/addExercise/:id', async (req, res) => {
    const response = await PlaylistController.addExercise(req.params.id, req.body);
    res.send(response);
});

playlistRoutes.delete('/removeExercise/:id', async (req, res) => {
    const response = await PlaylistController.removeExercise(req.params.id, req.body);
    res.send(response);
});

module.exports = playlistRoutes;