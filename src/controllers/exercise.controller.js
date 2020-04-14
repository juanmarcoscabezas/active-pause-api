const ExerciseModel = require('../models/exercise.model');
const BoomError = require('../tools/BoomError');
const Boom = require('@hapi/boom');

exerciseController = {};

exerciseController.listAll = async () => {
    try {
        const exercises = await ExerciseModel.find();
        return(exercises);
    } catch (error) {
        return BoomError(Boom.badRequest(error));
    }
}

exerciseController.getExercise = async (id) => {
    try {
        const exercise = await ExerciseModel.findById(id);
        if (!exercise) {
            return BoomError(Boom.notFound('Exercise not found'));
        }
        return (exercise);    
    } catch (error) {
        return BoomError(Boom.badRequest(error));
    }
}

exerciseController.createExercise = async (exercise) => {
    try {
        const newExercise = ExerciseModel.create(exercise);
        return (newExercise);   
    } catch (error) {
        return BoomError(Boom.badRequest(error));
    }
}

exerciseController.updateExercise = async (id, exercise) => {
    try {
        const updatedExercise = await ExerciseModel.findByIdAndUpdate(id, exercise, {new: true});
        if (!updatedExercise) {
            return BoomError(Boom.notFound('Exercise not found'));
        }
        return (updatedExercise);
    } catch(error) {
        return BoomError(Boom.badRequest(error));
    }
}

exerciseController.removeExercise = async (id) => {
    try {
        const removedExercise = await ExerciseModel.findByIdAndDelete(id);
        if (!removedExercise) {
            return BoomError(Boom.notFound('Exercise not found'));
        }
        return (removedExercise);
    } catch (error) {
        return BoomError(Boom.badRequest(error));
    }
}

module.exports = exerciseController;