//Importar MSSQL
var sql = require("mssql");
//Importar dotenv
require('dotenv').config()

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

   function getCustomers() {
    // Create connection instance
    var conn = new sql.Connection(dbConfig);
   
    conn.connect()
    // Successfull connection
    .then(function () {
   
      // Create request instance, passing in connection instance
      var req = new sql.Request(conn);
   
      // Call mssql's query method passing in params
      req.query("SELECT * FROM Productos")
      .then(function (recordset) {
        console.log(recordset);
        conn.close();
      })
      // Handle sql statement execution errors
      .catch(function (err) {
        console.log(err);
        conn.close();
      })
   
    })
    // Handle connection errors
    .catch(function (err) {
      console.log(err);
      conn.close();
    });
   }
   
   
   getCustomers();