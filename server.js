var express = require('express');
var app = express();
var errmsg= "No se pudo conectar con azure";
//GETID
app.get('/Producto/all/:id', function (req, res) {
    var sql = require("mssql");
    //Parametros de conexion sql
    var dbConfig = {    
        server: "undbs.database.windows.net", // SQL server name
        database: "LuaDB", // Nombre de la db
        user: "herasj", // User de conexion
        password: "Mgcjcegm8", // Contraseña de conexion
        port: 1433,
        options: {
            encrypt: true
        }
    };
    var id=req.params.id;
    console.log("Parametros de entrada: "+req.params);
    console.log("ID: "+id);
    //Conectar a una db
    getbyID(dbConfig,id,res,sql);
});

//CompletarNombre
app.get('/Producto/nombre/:name', function (req, res) {
    var sql = require("mssql");
    //Parametros de conexion sql
    var dbConfig = {    
        server: "undbs.database.windows.net", // SQL server name
        database: "LuaDB", // Nombre de la db
        user: "herasj", // User de conexion
        password: "Mgcjcegm8", // Contraseña de conexion
        port: 1433,
        options: {
            encrypt: true
        }
    };
    var name=req.params.name;
    console.log("Parametros de entrada: "+req.params);
    console.log("Nombre: "+name);
    //Conectar a una db
    getName(dbConfig,name,res,sql);
});

//Correr servidor en el puerto 5000
var server = app.listen(5000, function () {
    console.log('Corriendo servidor');
});


//Query
function getbyID(dbConfig,id,res,sql){
    console.log("Llamado a la función");    
    sql.connect(dbConfig, function (err) {
        if (err){console.log(err); res.send(errmsg);}//Mostrar error si existe
        console.log("Conexión establecida");        
        var request = new sql.Request();
        var query=`SELECT * FROM Productos p WHERE p.productID=${id}`;
        // Aplicar query a la db y guardar en recordset
        request.query(query, function (err, recordset) {
            if (err) console.log(err) //Si hay error mostrar
            res.send(recordset);//Enviar resultados mediante APIREST
            sql.close();
        });
    });
    
}

function getName(dbConfig,name,res,sql){
    console.log("Llamado a la funcion");    
    sql.connect(dbConfig, function (err) {
        if (err){console.log(err); res.send(errmsg);}//Mostrar error si existe
        console.log("Conexion establecida");    
        var request = new sql.Request();
        var query=`SELECT p.Nombre FROM Productos p WHERE p.Nombre like '${name}%'`;
        // Aplicar query a la db y guardar en recordset
        request.query(query, function (err, recordset) {
            if (err) console.log(err) //Si hay error mostrar
            res.send(recordset);//Enviar resultados mediante APIREST
            sql.close();
        });
    });
    
}