var express = require('express');
var app = express();
var port =process.argv[2];

app.get('/', function(req, res){
   res.send("Hello world! "+port);
});

app.listen(port);