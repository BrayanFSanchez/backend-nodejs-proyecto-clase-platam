var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    nombre: String,
    precio: Number
});

module.exports = mongoose.model('productos', esquema);