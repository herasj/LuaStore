const config = require('../config/database');
var sql = require("mssql");
module.exports = {
    create: (data,res) => {
        sql.connect(config, function (err) {
            if (err){console.log(err); res.send(err);}//Mostrar error si existe
            var request = new sql.Request();
            var query=`INSERT INTO Usuarios (userID, Nombre, Apellidos, Fecha_Nac, Telefono, Direccion, "Key", Coins, Email, Password) VALUES (${data.id},'${data.name}','${data.lastname}','${data.date}',${data.phone},'${data.address}',NULL,0,'${data.email}','${data.pass}')`;   
            request.query(query, function (err, recordset) {
                if (err) console.log(err) //Si hay error mostrar        
                sql.close();
                res.status();
            });
        });
    },
    research:(data,res) =>{
        sql.connect(config, function (err) {
            if (err){console.log(err); res.send(err);}//Mostrar error si existe
            var request = new sql.Request();
            var query=`SELECT * FROM Usuarios WHERE Email='${data.email}'`;   
            request.query(query, function (err, recordset) {
                if (err) console.log(err) //Si hay error mostrar        
                res.send(recordset.recordset);
                sql.close();
            });
        });
    }
}