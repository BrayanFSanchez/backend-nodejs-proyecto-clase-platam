var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
    res.send("Petición recibida");
});

app.listen(8888, function(){
    console.log('Servidor levantado')
});