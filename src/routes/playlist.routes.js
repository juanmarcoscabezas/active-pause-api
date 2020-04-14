const PauseController = require('../controllers/playlist.controller');

const playlistRoutes = require('express').Router();

playlistRoutes.get('/', async (req, res) => {
    response = await PauseController.listAll();
    res.send(response);
});

playlistRoutes.get('/:id', async (req, res) => {
    const response = await PauseController.getPause(req.params.id);
    res.send(response);
});

playlistRoutes.post('/', async (req, res) => {
    const response = await PauseController.createPause(req.body);
    res.send(response);
});

playlistRoutes.put('/:id', async (req, res) => {
    const response = await PauseController.updatePause(req.params.id, req.body);
    res.send(response);
});

playlistRoutes.delete('/:id', async (req, res) => {
    const response = await PauseController.removePause(req.params.id);
    res.send(response);
});

module.exports = playlistRoutes;