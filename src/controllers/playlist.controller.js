const PlaylistModel = require('../models/playlist.model');
const BoomError = require('../tools/BoomError');
const Boom = require('@hapi/boom');

playlistController = {};

playlistController.listAll = async () => {
    try {
        const playLists = await PlaylistModel.find();
        return(playLists);
    } catch (error) {
        return BoomError(Boom.badRequest(error));
    }
}

playlistController.getPlaylist = async (id) => {
    try {
        const playlist = await PlaylistModel.findById(id);
        if (!playlist) {
            return BoomError(Boom.notFound('Playlist not found'));
        }
        return (playlist);    
    } catch (error) {
        return BoomError(Boom.badRequest(error));
    }
}

playlistController.createPlaylist = async (playlist) => {
    try {
        const newPlaylist = PlaylistModel.create(playlist);
        return (newPlaylist);   
    } catch (error) {
        return BoomError(Boom.badRequest(error));
    }
}

playlistController.updatePlaylist = async (id, playlist) => {
    try {
        const updatedPlaylist = await PlaylistModel.findByIdAndUpdate(id, playlist, {new: true});
        if (!updatedPlaylist) {
            return BoomError(Boom.notFound('Playlist not found'));
        }
        return (updatedPlaylist);
    } catch(error) {
        return BoomError(Boom.badRequest(error));
    }
}

playlistController.removePlaylist = async (id) => {
    try {
        const removedPlaylist = await PlaylistModel.findByIdAndDelete(id);
        if (!removedPlaylist) {
            return BoomError(Boom.notFound('Playlist not found'));
        }
        return (removedPlaylist);
    } catch (error) {
        return BoomError(Boom.badRequest(error));
    }
}

module.exports = playlistController;