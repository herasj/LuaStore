const config = require('../config/database');
var sql = require("mssql");
module.exports = {
    getbyName: (data) => {
        let res= data.res;
        sql.connect(config, function (err) {
            if (err){console.log(err); res.send(errmsg);}//Mostrar error si existe    
            var request = new sql.Request();
            var query=`SELECT p.Nombre FROM Productos p WHERE p.Nombre like '${data.name}%'`;
            // Aplicar query a la db y guardar en recordset
            request.query(query, function (err, recordset) {
                if (err) console.log(err) //Si hay error mostrar
                res.send(recordset.recordset);//Enviar resultados mediante APIREST
                console.table(recordset);
                sql.close();
            });
        });
    },
    getbyID: (data) =>{
        let res = data.res;
        sql.connect(config, function (err) {
            if (err){console.log(err); res.send(errmsg);}//Mostrar error si existe    
            var request = new sql.Request();
            var query=`SELECT * FROM Productos p WHERE p.productID=${data.id}`;
            // Aplicar query a la db y guardar en recordset
            request.query(query, function (err, recordset) {
                if (err) console.log(err) //Si hay error mostrar
                res.send(recordset.recordset);//Enviar resultados mediante APIREST
                sql.close();
            });
        });
    },
    research: (data)=>{
        let res = data.res;
        sql.connect(config, function (err) {
            if (err){console.log(err); res.send(errmsg);}//Mostrar error si existe    
            var request = new sql.Request();
            var query=`SELECT * FROM Productos p WHERE p.Name=${data.name}`;
            // Aplicar query a la db y guardar en recordset
            request.query(query, function (err, recordset) {
                if (err) console.log(err) //Si hay error mostrar
                res.send(recordset.recordset);//Enviar resultados mediante APIREST
                sql.close();
            });
        });
    },
    new: (res)=>{
        sql.connect(config, function (err) {
            if (err){console.log(err); res.send(errmsg);}//Mostrar error si existe    
            var request = new sql.Request();
            var query=`SELECT TOP (10) [productID]
            ,[Nombre]
            ,[Descripcion]
            ,[Precio]
            ,[Dcto]
            ,[Categoria]
            ,[Subcategoria]
            ,[Referencia]
            ,[Fecha_Creacion]
        FROM [dbo].[Productos]
        ORDER BY Fecha_Creacion DESC`;
            // Aplicar query a la db y guardar en recordset
            request.query(query, function (err, recordset) {
                if (err) console.log(err) //Si hay error mostrar
                res.send(recordset.recordset);//Enviar resultados mediante APIREST
                sql.close();
            });
        });
    },
    getphoto: (data) =>{
        let res = data.res;
        sql.connect(config, function (err) {
            if (err){console.log(err); res.send(errmsg);}//Mostrar error si existe    
            var request = new sql.Request();
            var query=`SELECT f.fotoURL
            FROM Productos p JOIN Fotos f
            ON p.productID=f.productID
            WHERE f.productID=${data.id}`;
            // Aplicar query a la db y guardar en recordset
            request.query(query, function (err, recordset) {
                if (err) console.log(err) //Si hay error mostrar
                res.send(recordset.recordset);//Enviar resultados mediante APIREST
                sql.close();
            });
        });
    }
}



// function create(values){ 
//     sql.connect(config, function (err) {
//         if (err){console.log(err); res.send(errmsg);}//Mostrar error si existe      
//         var request = new sql.Request();
//         var query=`SELECT * FROM Productos p WHERE p.productID=${id}`;
//         // Aplicar query a la db y guardar en recordset
//         request.query(query, function (err, recordset) {
//             if (err) console.log(err) //Si hay error mostrar
//             res.send(recordset.recordset);//Enviar resultados mediante APIREST
//             sql.close();
//         });
//     });
    
// }