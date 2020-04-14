const express = require('express');
const { dev } = require('./config');

// Middlewares
const morgan = require('morgan');

// Requiring DB
require('./db');

// Starting app
const app = express();

// Using middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Using routes
app.use('/api', require('./routes'));

// Server listening
app.listen(dev.port, () => {
    console.log('App listening on port ' + dev.port);
});