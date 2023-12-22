import app from "./app.js";
import connection from "./connection/connection.js"

import Usuario from "./models/Usuario.js";
import Area from "./models/Area.js";
import Empleado from "./models/Empleado.js";
import TipoDocumento from "./models/TipoDocumento.js";
import Movimiento from "./models/Movimiento.js";
import Documento from "./models/Documento.js";
import Remitente from "./models/Remitente.js";
import Tramite from "./models/Tramite.js";
import Empresa from "./models/Empresa.js";

async function main (){ //connection test
    try {
        await connection.authenticate();
        console.log('Connection has been established successfully.');

        //syncs
        //await connection.sync({force:true}) // drop after again all tables
        // Area.sync({force:true}) //drop after create again tha table
         //Empleado.sync({force:true}) //drop after create again tha table
        // Usuario.sync({force:true}) //drop after create again tha table
        // TipoDocumento.sync({force:true}) //drop after create again tha table
        // Movimiento.sync({force:true}) //drop after create again tha table
        // Documento.sync({force:true}) //drop after create again tha table
        // Tramite.sync({force:true}) //drop after create again tha table
        // Remitente.sync({force:true}) //drop after create again tha table
        //Empresa.sync({force:true}) //drop after create again tha table
        

        app.listen(3000)
        console.log("server in port 3000");
      
    } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

main();

