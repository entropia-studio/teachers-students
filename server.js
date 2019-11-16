//Install express server
const express = require('express');
const path = require('path');

const app = express();

console.log('express init')

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/teachers-students'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/teachers-students/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8000);