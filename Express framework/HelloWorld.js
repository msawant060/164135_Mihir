var express = require('express');
var app = express();

app.get('/Hello', function(req, res){
   res.send("Hello world!");
});

app.get('/Contact', function(req, res){
    res.send("as");
 });
 
app.listen(3000);