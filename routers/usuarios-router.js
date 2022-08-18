var express = require('express');
var router = express.Router();
var usuario = require('../models/usuario');
var usuario = require('../models/carrito');
var usuario = require('../models/compra');

//Crear usuario
router.post('/', function(req, res){
    let u = new usuario(
        {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            fechaNacimiento: req.body.fechaNacimiento,
            pais: req.body.pais
        }
    );

    u.save().then(result=>{
        res.send(result);
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

//Ontener un usuario
router.get('/:idUsuario', function(req,res){
    usuario.find({_id:req.params.idUsuario}).then(result=>{
        res.send(result[0]);
        res.end();
     }).catch(error=>{
         res.send(error);
         res.end();
     });
})

//Obtener todos los usuarios
router.get('/', function(req, res){
    usuario.find().then(result=>{
       res.send(result);
       res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

//Actualizar un usuario
router.put('/:idUsuario', function(req,res){
    usuario.updateOne(
        {
            _id:req.params.idUsuario
        },
        {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            fechaNacimiento: req.body.fechaNacimiento,
            pais: req.body.pais
        }
    ).then(result=>{
        res.send(result);
        res.send();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

//Eliminar un usuario
router.delete('/:idUsuario', function(req,res){
    usuario.remove(
        {
            _id: req.params.idUsuario
        }
    ).then(result=>{
        res.send(result);
        res.send();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

//Visualizar las empresas
router.get('/:idUsuario/empresas', function(req, res){
    res.send(`El usuario ${req.params.idUsuario} visualiza el listado de las empresas`);
    res.end();
});

//Visualizar los productos de las empresas
router.get('/:idUsuario/empresas/:idEmpresa/productos', function(req, res){
    res.send(`El usuario ${req.params.idUsuario} visualiza el listado de productos de la empresa ${req.params.idEmpresa}`);
    res.end();
});

//Crear un nuevo carrito
router.post('/:idUsuario/carritos', function(req, res){
    res.send(`Guardar un nuevo carrito para el usuario ${req.params.idUsuario}`);
    res.end();
});

//Agregar productos al carrito
router.post('/:idUsuario/carritos/:idCarrito/productos', function(req, res){
    res.send(`El usuario ${req.params.idUsuario} guarda un producto al carrito ${req.params.idCarrito}`);
    res.end();
});

//Actualizar un producto del carrito
router.put('/:idUsuario/carritos/:idCarrito/productos/:idProducto', function(req, res){
    res.send(`El usuario ${req.params.idUsuario} actualiza un producto ${req.params.idProducto} al carrito ${req.params.idCarrito}`);
    res.end();
});

//Eliminar un producto del carrito
router.delete('/:idUsuario/carritos/:idCarrito/productos/:idProducto', function(req, res){
    res.send(`El usuario ${req.params.idUsuario} eliminó un producto ${req.params.idProducto} al carrito ${req.params.idCarrito}`);
    res.end();
});

//Realizar una compra
router.post('/:idUsuario/productos/:idProducto/compras', function(req, res){
    res.send(`El usuario ${req.params.idUsuario} guarda un producto ${req.params.idProducto} a compras realizadas`);
    res.end();
});

//Visualizar el listado de compras
router.get('/:idUsuario/compras', function(req, res){
    res.send(`El usuario ${req.params.idUsuario} visualiza los productos comprados`);
    res.end();
});

module.exports = router;