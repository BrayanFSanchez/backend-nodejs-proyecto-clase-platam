var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
//var testModule = require('./modules/test-module');
var database = require('./modules/database');
var adminsRouter = require('./routers/admins-router');
var usuariosRouter = require('./routers/usuarios-router');
var empresasRouter = require('./routers/empresas-router');

var app = express();

//Middleware
app.use(cors()); //Permite peticiones de otros origenes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/admins', adminsRouter);
app.use('/usuarios', usuariosRouter);
app.use('/empresas', empresasRouter);

app.get('/', function(req, res){
    res.send('Servidor backend en linea');
});

app.listen(8888, function(){
    console.log('Servidor levantado')
});