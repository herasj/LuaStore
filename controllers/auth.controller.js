const config = require('../config/database');
var sql = require("mssql");
module.exports = {
    create: (data) =>{
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
    }
}