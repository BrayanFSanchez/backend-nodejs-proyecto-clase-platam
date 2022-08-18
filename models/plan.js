var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    nombre: String,
    noPaginas: Number,
});

module.exports = mongoose.model('planes', esquema);