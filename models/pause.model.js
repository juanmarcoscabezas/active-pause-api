const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pauseSchema = Schema({
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
    }
});

module.exports = mongoose.model('Pause', pauseSchema);