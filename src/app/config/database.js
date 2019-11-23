//Set up mongoose connection
const mongoose = require('mongoose');
const mondoDB = require('./access');

const MONGODB_URI = 'mongodb://'+mondoDB.USER_DB+':'+mondoDB.PASS+'@'+mondoDB.HOST+':'+mondoDB.DB_PORT+'/'+mondoDB.DB;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

module.exports = mongoose