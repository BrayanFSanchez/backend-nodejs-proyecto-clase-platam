var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    nombre: String,
    noCompras: Number
});

module.exports = mongoose.model('compras', esquema);