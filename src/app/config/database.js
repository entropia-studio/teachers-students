//Set up mongoose connection
const mongoose = require('mongoose');
const mondoDB = require('./access');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

module.exports = mongoose