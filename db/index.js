const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost:27017/activepause',
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    },
    (err) => {
        if (err) console.log('Error on DB connection');
        else console.log('DB is connected');
    }
);