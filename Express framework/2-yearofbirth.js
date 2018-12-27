var express = require('express');
var app = express();
var moment = require('moment');

app.get('/year', function(req, res){
    var user_age = req.param('age');

    var yearofbirth=moment().subtract(user_age,'years').year();
    
   res.send("You are "+user_age +" years old.You were born in "+yearofbirth);
});

app.listen(3000);