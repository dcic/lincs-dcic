var express = require('express');

var app = express();
app.use('/static', express.static(__dirname + '/static'));
app.use('/', express.static(__dirname + '/public'));

app.listen(8000);