var express = require('express');
var router = express.Router();
var admin = require('../models/admin');
var admin = require('../models/empresa');
var admin = require('../models/plan');
var admin = require('../models/tema');

//Obtener los admins
/*router.get('/', function(req, res){
    admin.find().then(result=>{
       res.send(result);
       res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});
*/

//Visualizar los administradores
router.get('/', function(req, res){
    res.send(`Listado de los administradores`);
    res.end();
});

//Crear nuevo administrador
router.post('/', function(req, res){
    res.send(`Se creo un nuevo administrador`);
    res.end();
});

//Actualizar un administrador
router.put('/:idAdmin', function(req, res){
    res.send(`Se actualizó el administrador ${req.params.idAdmin}`);
    res.end();
});

//Eliminar un administrador
router.delete('/:idAdmin', function(req, res){
    res.send(`Se eliminó el administrador ${req.params.idAdmin}`);
    res.end();
});

//Visualizar las empresas
router.get('/empresas', function(req, res){
    res.send(`Listado de las empresas`);
    res.end();
});

//Eliminar una empresa
router.delete('/empresas/:idEmpresa', function(req, res){
    res.send(`Se eliminó una empresa ${req.params.idEmpresa}`);
    res.end();
});

//Visualizar los planes
router.get('/planes', function(req, res){
    res.send(`Listado de los planes`);
    res.end();
});

//Crear nuevo plan
router.post('/planes', function(req, res){
    res.send(`Guardar un nuevo plan`);
    res.end();
});

//Acualizar un plan
router.put('/planes/:idPlan', function(req,res){
    res.send(`Se actualizó el plan ${req.params.idPlan}`);
    res.end();
});

//Eliminar un plan
router.delete('/planes/:idPlan', function(req,res){
    res.send(`Se eliminó el plan ${req.params.idPlan}`);
    res.end();
});

//Visualizar los temas
router.get('/temas', function(req, res){
    res.send(`Listado de los temas`);
    res.end();
});

module.exports = router;