const PauseController = require('../controllers/pause.controller');

pauseRoutes = [];

listAll = {
    method: 'GET',
    path: '/pause',
    handler: (request, h) => {
        pauses = PauseController.listAll();
        return pauses;
    }
}

getPause = {
    method: 'GET',
    path: '/pause/{id}',
    handler: (request, h) => {
        const response = PauseController.getPause(request.params.id);
        return response;
    }
}

createPause = {
    method: 'POST',
    path: '/pause',
    handler: (request, h) => {
        const response = PauseController.createPause(request.payload);
        return  response;
    }
}

updatePause = {
    method: 'PUT',
    path: '/pause/{id}',
    handler: (request, h) => {
        const response = PauseController.updatePause(request.params.id, request.payload);
        return  response;
    }
}


removePause = {
    method: 'DELETE',
    path: '/pause/{id}',
    handler: (request, h) => {
        const response = PauseController.removePause(request.params.id);
        return  response;
    }
}


pauseRoutes.push(listAll);
pauseRoutes.push(getPause);
pauseRoutes.push(createPause);
pauseRoutes.push(updatePause);
pauseRoutes.push(removePause);

module.exports = pauseRoutes;