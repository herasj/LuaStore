var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var sql = require("mssql"); //SQL SERVER
    //Parametros de conexion en Azure
    var dbConfig = {
        server: process.env.DB_SERVER, // SQL server name
        database: process.env.DB_NAME, // Nombre de la db
        user: process.env.DB_USER, // User de conexion
        password: process.env.DB_PASSWORD, // Contraseña de conexion
        port: 1433,
        options: {
            encrypt: true
        }
    };
  res.render('index', { title: 'Express' });
});

module.exports = router;
