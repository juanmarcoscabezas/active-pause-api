const express = require('express');
const { dev } = require('./config');

// Middlewares
const morgan = require('morgan');
const cors = require('cors');

// Requiring DB
require('./db');

// Starting app
const app = express();

// Using middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

// Using routes
app.use('/api', require('./routes'));

// Server listening
app.listen(dev.port, () => {
    console.log('App listening on port ' + dev.port);
});
