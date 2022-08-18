var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    nombre: String,
    direccion: String
});

module.exports = mongoose.model('empresas', esquema);