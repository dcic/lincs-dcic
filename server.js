/*var express = require('./lib/node_modules/express');

var app = express();
app.use('/static', express.static(__dirname + '/static'));
app.use('/', express.static(__dirname + '/'));
app.listen(8000);*/

var express = require('./lib/node_modules/express');
var php = require("./lib/node_modules/php"); 
var path = require("./lib/node_modules/path"); 

var app = express();

console.log(php);

//app.use("/", php.cgi("index.php")); 
//app.listen(8000);
//console.log("Server listening!");
