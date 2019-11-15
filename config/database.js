'use strict'
const dotenv = require('dotenv');
dotenv.config();
var dbConfig = {    //Parametros de conexion sql
    server: process.env.DB_SERVER, // SQL server name
    database: process.env.DB_NAME, // Nombre de la db
    user: process.env.DB_USER, // User de conexion
    password: process.env.DB_PASSWORD, // Contraseña de conexion
    port: 1433, // Puerto
    options: {
        encrypt: true
    }
};
 
module.exports=dbConfig;
