const PlaylistModel = require('../models/playlist.model');
const { PlaylistSchema } = require('../schemas/playlist.schema');
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

        const validation = PlaylistSchema.validate(playlist);

        if (validation.error) {
            error = validation.error.details[0].message;
            return BoomError(Boom.badRequest(error));
        }

        const newPlaylist = PlaylistModel.create(playlist);
        return (newPlaylist);   
    } catch (error) {
        return BoomError(Boom.badRequest(error));
    }
}

playlistController.updatePlaylist = async (id, playlist) => {
    try {
        const validation = PlaylistSchema.validate(playlist);

        if (validation.error) {
            error = validation.error.details[0].message;
            return BoomError(Boom.badRequest(error));
        }

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

playlistController.addExercise = async (id, exercise) => {
    try {
        const playlist = await PlaylistModel.findOne(
            {'_id': id, 
            exercises: {'$in': [exercise._id]}}
        );

        if (playlist) {
            return BoomError(Boom.badRequest('Exercise already exists in playlist'));
        } else {
            const updatedPlaylist = await PlaylistModel.findByIdAndUpdate(
                {'_id': id},
                {$push: {'exercises': exercise._id}},
                {new: true}
            );
            return (updatedPlaylist);
        }
    } catch (error) {
        return BoomError(Boom.badRequest(error));
    }
}

playlistController.removeExercise = async (id, exercise) => {
    try {
        const playlist = await PlaylistModel.findOne(
            {'_id': id, 
            exercises: {'$in': [exercise._id]}}
        );

        if (playlist) {
            const updatedPlaylist = await PlaylistModel.findByIdAndUpdate(
                {'_id': id},
                {$pullAll: {'exercises': [exercise._id]}},
                {new: true}
            );
            return (updatedPlaylist);
        } else {
            return BoomError(Boom.notFound('Exercise not found in playlist'));
        }
    } catch (error) {
        return BoomError(Boom.badRequest(error));
    }
}

module.exports = playlistController;