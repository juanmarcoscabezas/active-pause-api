activitiesRoutes = [];

listAll = {
    method: 'GET',
    path: '/activity',
    handler: (request, h) => {
        return  'Hello world';
    }
}

listActivity = {
    method: 'GET',
    path: '/activity/{id}',
    handler: (request, h) => {
        return  'Hello world';
    }
}

insertActivity = {
    method: 'POST',
    path: '/activity',
    handler: (request, h) => {
        return  'Hello world';
    }
}

updateActivity = {
    method: 'PUT',
    path: '/activity',
    handler: (request, h) => {
        return  'Hello world';
    }
}


deleteActivity = {
    method: 'DELETE',
    path: '/activity',
    handler: (request, h) => {
        return  'Hello world';
    }
}


activitiesRoutes.push(listAll);

module.exports = activitiesRoutes;