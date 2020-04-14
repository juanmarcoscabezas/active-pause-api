const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playlistSchema = Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    imgUrl: {
        type: String
    },
    exercises: {
        type: Array
    }
});

module.exports = mongoose.model('Playlist', playlistSchema);