var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    fechaNacimiento: String,
    pais: String
});

module.exports = mongoose.model('usuarios', esquema);