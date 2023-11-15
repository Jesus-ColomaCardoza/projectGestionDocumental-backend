import { DataTypes } from "sequelize";
import sequelize from "../connection/connection.js"
import Usuario from "./Usuario.js";

const Documento=sequelize.define('Documento', {

    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    //sender features
    sender_nro_document:{
        type:DataTypes.STRING
    },
    sender_name:{
        type:DataTypes.STRING,
    },
    paternal_surname:{
        type:DataTypes.STRING,
    },    
    maternal_surname:{
        type:DataTypes.STRING,
    },    
    sender_phone:{
        type:DataTypes.STRING(12)
    },
    sender_email:{
        type:DataTypes.STRING
    },
    ruc:{
        type:DataTypes.STRING(12)
    }, 
    company:{
        type:DataTypes.STRING,
    }, 
    //documnet features

    nro_document:{
        type:DataTypes.STRING
    },    
    page:{
        type:DataTypes.STRING
    },  
    subject:{
        type:DataTypes.STRING
    },  
    attached:{
        type:DataTypes.STRING
    },  
    state:{
        //search states document
        type:DataTypes.ENUM,
        values:['activo','inactivo'],
        defaultValue:'activo'
    }

}, {
    tableName:'documentos',
})

Documento.hasMany(Usuario,{
    foreignKey:'empleado_id',
    sourceKey:'id'
})

// Usuario.belongsTo(Documento,{
//     foreignKey:'empleado_id',
//     targetKey:'id'
// })

export default Documento;