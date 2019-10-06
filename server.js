var express = require('express');
var app = express();
var errmsg= "No se pudo conectar con azure";
var faker = require('faker');
var sql = require("mssql");
var dbConfig = {    //Parametros de conexion sql
    server: "undbs.database.windows.net", // SQL server name
    database: "LuaDB", // Nombre de la db
    user: "herasj", // User de conexion
    password: "Mgcjcegm8", // Contraseña de conexion
    port: 1433,
    options: {
        encrypt: true
    }
};

//RUTAS
app.put('/Random', function (req, res) {
    InsertRandom(dbConfig,res,sql);
});

//GETID
app.get('/Producto/all/:id', function (req, res) {
    var id=req.params.id;
    console.log("Parametros de entrada: "+req.params);
    console.log("ID: "+id);
    //Conectar a una db
    getbyID(dbConfig,id,res,sql);
});

//CompletarNombre
app.get('/Producto/nombre/:name', function (req, res) {
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
            res.send(recordset.recordset);//Enviar resultados mediante APIREST
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
            res.send(recordset.recordset);//Enviar resultados mediante APIREST
            console.table(recordset);
            sql.close();
        });
    });
}
 function InsertRandom(dbConfig,res,sql){
    console.log("Llamado a la funcion");    
    sql.connect(dbConfig, function (err) {
        if (err){console.log(err); res.send(err);}//Mostrar error si existe
        console.log("Conexion establecida");    
        var request = new sql.Request();
        var Insertados=[];
        for (let i = 102; i < 200; i++) {
            let randName=faker.name.findName();
            let randLast=faker.name.lastName();
            let randDate=faker.date.past();
            let randPhone=faker.phone.phoneNumber();
            let randAdd=faker.address.streetAddress();
            let randCoins=Math.round(Math.random()*100);
            Insertados[102-i] =randName+" "+randLast+" "+randDate+" "+randPhone+" "+randAdd+" "+randCoins.toString();
            var query=`INSERT INTO Usuarios (userID, Nombre, Apellidos, Fecha_Nac, Telefono, Direccion, "Key", Coins) VALUES (${i},${randName},${randLast},${randDate},${randPhone},${randAdd},NULL,${randCoins})`;     
        } 
        // Aplicar query a la db y guardar en recordset
        request.query(query, function (err, recordset) {
            if (err) console.log(err) //Si hay error mostrar
            console.log("Exito");            
            res.send(Insertados);//Enviar resultados mediante APIREST
            sql.close();
        });
    });
 }
//INSERT INTO Usuarios (userID, Nombre, Apellidos, Fecha_Nac, Telefono, Direccion, "Key", Coins) 
//VALUES () 