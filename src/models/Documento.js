import { DataTypes } from "sequelize";
import sequelize from "../connection/connection.js"
import Usuario from "./Usuario.js";

const Documento=sequelize.define('Documento', {

    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    employee_name:{
        type:DataTypes.STRING,
    },
    paternal_surname:{
        type:DataTypes.STRING,
    },    
    maternal_surname:{
        type:DataTypes.STRING,
    },    
    date_birth:{
        type:DataTypes.DATEONLY,
    },
    nro_document:{
        type:DataTypes.STRING
    },
    phone:{
        type:DataTypes.STRING(12)
    },
    email:{
        type:DataTypes.STRING
    },
    address:{
        type:DataTypes.STRING
    },
    profile_photo:{
        type:DataTypes.BLOB
    },
    status:{
        type:DataTypes.STRING
    }

}, {
    tableName:'documentos',
    timestamps:false

})

// Documento.hasMany(Usuario,{
//     foreignKey:'empleado_id',
//     sourceKey:'id'
// })

// Usuario.belongsTo(Documento,{
//     foreignKey:'empleado_id',
//     targetKey:'id'
// })

export default Documento;