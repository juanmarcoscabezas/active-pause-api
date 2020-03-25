const PauseModel = require('../models/pause.model');

pauseController = {};

pauseController.listAll = async () => {
    try {
        const pauses = await PauseModel.find();
        return(pauses);
    } catch (error) {
        
    }
}

pauseController.getPause = async (id) => {
    try {
        const pause = await PauseModel.findById(id);
        return (pause);    
    } catch (error) {
        
    }
}

pauseController.createPause = async (pause) => {
    try {
        const newPause = PauseModel.create(pause);
        return (newPause);   
    } catch (error) {
        
    }
}

pauseController.updatePause = async (id, pause) => {
    try {
        const updatedPause = await PauseModel.findByIdAndUpdate(id, pause, {new: true});
        return (updatedPause);
    } catch(err) {
        console.log(err);
    }
}

pauseController.removePause = async (id) => {
    try {
        const removedPause = PauseModel.findOneAndRemove({'_id': id});
        return (removedPause);   
    } catch (error) {
        
    }
}

module.exports = pauseController;