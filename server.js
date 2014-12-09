var express = require('./lib/node_modules/express');

var app = express();
app.use('/static', express.static(__dirname + '/static'));
app.use('/', express.static(__dirname + '/'));
app.listen(8000);