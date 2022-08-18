var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    nombreUsuario: String,
    correoUsuario: String
});

module.exports = mongoose.model('usuarios', esquema);