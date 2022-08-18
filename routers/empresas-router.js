var express = require('express');
var router = express.Router();
var admin = require('../models/empresa');
var admin = require('../models/pagina');
var admin = require('../models/bloque');
var admin = require('../models/archivo');
var admin = require('../models/producto');
var admin = require('../models/categoria');

//Crear un empresa
router.post('/', function(req, res){
    res.send(`Se creo una nueva empresa`);
    res.end();
});

//Crear página
router.post('/:idEmpresa/paginas', function(req, res){
    res.send(`Se creo una nueva página para la empresa ${req.params.idEmpresa}`);
    res.end();
});

//Eliminar página
router.delete('/:idEmpresa/paginas/:idPagina', function(req, res){
    res.send(`Se eliminó la pagina ${req.params.idPagina} de la empresa ${req.params.idEmpresa}`);
    res.end();
});

//Actualizar página
router.put('/:idEmpresa/paginas/:idPagina', function(req, res){
    res.send(`Se actualizó la pagina ${req.params.idPagina} de la empresa ${req.params.idEmpresa}`);
    res.end();
});

//Subir archivo
router.post('/:idEmpresa/archivos', function(req, res){
    res.send(`Se creo un nuevo archivo para la empresa ${req.params.idEmpresa}`);
    res.end();
});

//Actualizar archivo
router.put('/:idEmpresa/archivos/:idArchivo', function(req, res){
    res.send(`Se actualizó el archivo ${req.params.idArchivo} de la empresa ${req.params.idEmpresa}`);
    res.end();
});

//Eliminar archivo
router.delete('/:idEmpresa/archivos/:idArchivo', function(req, res){
    res.send(`Se eliminó el archivo ${req.params.idArchivo} de la empresa ${req.params.idEmpresa}`);
    res.end();
});

//Guardar bloque de contenido
router.post('/:idEmpresa/bloques', function(req, res){
    res.send(`Se guardó un bloque de la empresa ${req.params.idEmpresa}`);
    res.end();
});

//Actualizar bloque de contenido
router.put('/:idEmpresa/bloques/:idBloque', function(req, res){
    res.send(`Se actualizó el bloque ${req.params.idBloque} de la empresa ${req.params.idEmpresa}`);
    res.end();
});

//Eliminar bloque de contenido
router.delete('/:idEmpresa/bloques/:idBloque', function(req, res){
    res.send(`Se eliminó el bloque ${req.params.idBloque} de la empresa ${req.params.idEmpresa}`);
    res.end();
});

//Crear producto
router.post('/:idEmpresa/productos', function(req, res){
    res.send(`Se guardó un producto de la empresa ${req.params.idEmpresa}`);
    res.end();
});

//Eliminar producto
router.delete('/:idEmpresa/productos/:idProducto', function(req, res){
    res.send(`Se eliminó el producto ${req.params.idProducto} de la empresa ${req.params.idEmpresa}`);
    res.end();
});

//Actualizar producto
router.put('/:idEmpresa/productos/:idProducto', function(req, res){
    res.send(`Se actualizó el producto ${req.params.idProducto} de la empresa ${req.params.idEmpresa}`);
    res.end();
});

//Crear categoria
router.post('/:idEmpresa/categorias', function(req, res){
    res.send(`Se guardó una categoria de la empresa ${req.params.idEmpresa}`);
    res.end();
});

//Eliminar categoria
router.delete('/:idEmpresa/categorias/:idCategoria', function(req, res){
    res.send(`Se eliminó la categoria ${req.params.idCategoria} de la empresa ${req.params.idEmpresa}`);
    res.end();
});

//Actualizar categoria
router.put('/:idEmpresa/categorias/:idCategoria', function(req, res){
    res.send(`Se actualizó la categoria ${req.params.idCategoria} de la empresa ${req.params.idEmpresa}`);
    res.end();
});

module.exports = router;