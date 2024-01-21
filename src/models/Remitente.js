import { DataTypes } from "sequelize";
import sequelize from "../connection/connection.js"

const Remitente=sequelize.define('Remitente', {

    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nro_document:{
        type:DataTypes.STRING
    },
    sender_name:{
        type:DataTypes.STRING
    },
    paternal_surname:{
        type:DataTypes.STRING
    },    
    maternal_surname:{
        type:DataTypes.STRING
    },   
    date_birth:{
        type:DataTypes.DATEONLY
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
    representation:{
        type:DataTypes.STRING
    },

    ruc:{
        type:DataTypes.STRING,
        defaultValue:'sin ruc'
    }, 
    business_name:{
        type:DataTypes.STRING,
        defaultValue:'No presenta'
    }, 
   
    state:{
        type:DataTypes.ENUM,
        values:['activo','inactivo'],
        defaultValue:'activo'
    }

}, {
    tableName:'remitentes',
    timestamps:false
})

// Remitente.hasMany(Usuario,{
//     foreignKey:'empleado_id',
//     sourceKey:'id'
// })

// Usuario.belongsTo(Remitente,{
//     foreignKey:'empleado_id',
//     targetKey:'id'
// })

export default Remitente;