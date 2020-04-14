const PauseModel = require('../models/playlist.model');
const BoomError = require('../tools/BoomError');
const Boom = require('@hapi/boom');

pauseController = {};

pauseController.listAll = async () => {
    try {
        const playLists = await PauseModel.find();
        return(playLists);
    } catch (error) {
        return BoomError(Boom.badRequest(error));
    }
}

pauseController.getPause = async (id) => {
    try {
        const playlist = await PauseModel.findById(id);
        if (!playlist) {
            return BoomError(Boom.notFound('Playlist not found'));
        }
        return (playlist);    
    } catch (error) {
        return BoomError(Boom.badRequest(error));
    }
}

pauseController.createPause = async (playlist) => {
    try {
        const newPlaylist = PauseModel.create(playlist);
        return (newPlaylist);   
    } catch (error) {
        return BoomError(Boom.badRequest(error));
    }
}

pauseController.updatePause = async (id, playlist) => {
    try {
        const updatedPlaylist = await PauseModel.findByIdAndUpdate(id, playlist, {new: true});
        if (!updatedPlaylist) {
            return BoomError(Boom.notFound('Playlist not found'));
        }
        return (updatedPlaylist);
    } catch(error) {
        return BoomError(Boom.badRequest(error));
    }
}

pauseController.removePause = async (id) => {
    try {
        const removedPlaylist = await PauseModel.findByIdAndDelete(id);
        if (!removedPlaylist) {
            return BoomError(Boom.notFound('Playlist not found'));
        }
        return (removedPlaylist);
    } catch (error) {
        return BoomError(Boom.badRequest(error));
    }
}

module.exports = pauseController;