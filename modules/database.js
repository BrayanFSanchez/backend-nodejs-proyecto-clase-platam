var mongoose = require('mongoose');

let bd = 'nombreBase';
let port = '27017';
let host = 'localhost';

class Database{
    constructor(){
        this.conectar();
    }

    conectar(){
        mongoose.connect(`mongodb://${host}:${port}/${bd}`)
        .then(result=>console.log('Se conecto a mongodb'))
        .catch(console=>console.log(error));
    }
}

module.exports = new Database();