const ExerciseController = require('../controllers/exercise.controller');

const exerciseRoutes = require('express').Router();

exerciseRoutes.get('/', async (req, res) => {
    response = await ExerciseController.listAll();
    res.send(response);
});

exerciseRoutes.get('/:id', async (req, res) => {
    const response = await ExerciseController.getExercise(req.params.id);
    res.send(response);
});

exerciseRoutes.post('/', async (req, res) => {
    const response = await ExerciseController.createExercise(req.body);
    res.send(response);
});

exerciseRoutes.put('/:id', async (req, res) => {
    const response = await ExerciseController.updateExercise(req.params.id, req.body);
    res.send(response);
});

exerciseRoutes.delete('/:id', async (req, res) => {
    const response = await ExerciseController.removeExercise(req.params.id);
    res.send(response);
});

module.exports = exerciseRoutes;