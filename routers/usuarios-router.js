var express = require('express');
var router = express.Router();
var usuario = require('../models/usuario');

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
router.get('/:id', function(req,res){
    usuario.find({_id:req.params.id}).then(result=>{
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
router.put('/:id', function(req,res){
    usuario.updateOne(
        {
            _id:req.params.id
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
router.delete('/:id', function(req,res){
    usuario.remove(
        {
            _id: req.params.id
        }
    ).then(result=>{
        res.send(result);
        res.send();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

//Obtener listado del carrito
router.get('/:idUsuario/carritos/:idCarrito', function(req, res){
    res.send(`Obtener el carrito ${req.params.idCarrito} del usuario ${req.params.idUsuario}`);
    res.end();
});

//Obtener el listado de compras realizadas
router.get('/:idUsuario/carritos', function(req, res){
    res.send(`Obtener todos los carritos del usuario ${req.params.idUsuario}`);
    res.end();
});

//Guardar un producto en el carrito
router.post('/:idUsuario/carritos/:idCarrito/producto', function(req, res){
    res.send(`Guardar un producto en el carrito ${req.params.idCarrito} del usuario ${req.params.idUsuario}`);
    res.end();
});

//Crear un nuevo carrito
router.post('/:idUsuario/carritos', function(req, res){
    res.send(`Guardar un nuevo carrito para el usuario ${req.params.idUsuario}`);
    res.end();
});

module.exports = router;