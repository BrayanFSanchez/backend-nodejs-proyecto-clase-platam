var express = require('express');
var router = express.Router();
var admin = require('../models/admin');

//Obtener los admins
router.get('/', function(req, res){
    admin.find().then(result=>{
       res.send(result);
       res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

//http://localhost:8888/empresas/2/

module.exports = router;