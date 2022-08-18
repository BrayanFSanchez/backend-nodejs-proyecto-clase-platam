var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    nombre: String,
    numeroProductos: Number
});

module.exports = mongoose.model('carritos', esquema);