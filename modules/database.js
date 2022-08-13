var mongoose = require('mongoose');

var db = 'platam';

const DB_URI = `mongodb+srv://Brayan:ms8mZpC2BuvsPU58@api-rest.nue8jbk.mongodb.net/${db}?retryWrites=true&w=majority`;

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: true,
    //useCreateIndex: true
})
.then((db) => console.log('Mongodb se conecto a: ', db.connection.host))
.catch((err) => console.log(err));
        

/*let bd = 'nombreBase';
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
*/