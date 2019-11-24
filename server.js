require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const teachers = require('./src/app/api/routes/teachers');
const students = require('./src/app/api/routes/students');
const users = require('./src/app/api/routes/users');
const bodyParser = require('body-parser');
const mongoose = require('./src/app/config/database'); //database configuration
var jwt = require('jsonwebtoken');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());

app.set('secretKey', 'TvOuSe0f53Yh'); // jwt secret token


// connection to mongodb
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// public route
app.use('/users', users);

// private route
app.use('/teachers', validateUser, teachers);

app.use('/students', validateUser, students);

app.get('/favicon.ico', function (req, res) {
    res.sendStatus(204);
});

var distDir = __dirname + "/dist/teachers-students";

app.use(express.static(distDir));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/teachers-students/index.html'));
});

function validateUser(req, res, next) {

    console.log(req.headers)

    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function (err, decoded) {
        if (err) {
            res.json({
                status: "error",
                message: err.message,
                data: null
            });
        } else {
            // add user id to request
            req.body.userId = decoded.id;
            next();
        }
    });

}
// express doesn't consider not found 404 as an error so we need to handle 404 explicitly
// handle 404 error
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// handle errors
app.use(function (err, req, res, next) {
    console.log(err);

    if (err.status === 404)
        res.status(404).json({
            message: "Not found"
        });
    else
        res.status(500).json({
            message: "Something looks wrong :( !!!"
        });
});

app.listen(process.env.PORT || 8080);