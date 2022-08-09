var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
//var testModule = require('./modules/test-module');
var database = require('./modules/database');
var usuariosRouter = require('./routes/usuarios-router');

var app = express();

//Middleware
app.use(cors()); //Permite peticiones de otros origenes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/usuarios', usuariosRouter);

app.get('/', function(req, res){
    res.send('Servidor backend en linea');
});

app.listen(8888, function(){
    console.log('Servidor levantado')
});