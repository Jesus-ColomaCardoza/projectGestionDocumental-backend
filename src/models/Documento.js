import { DataTypes } from "sequelize";
import sequelize from "../connection/connection.js"

const Documento=sequelize.define('Documento', {

    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },    
    subject:{
        type:DataTypes.STRING
    },  
    date_registration:{
        type:DataTypes.DATEONLY,
    },  
    source:{
        type:DataTypes.STRING
    },  
    file:{
        type:DataTypes.STRING
    },
    state:{
        type:DataTypes.ENUM,
        values:['sin firmar','firmado'],
        defaultValue:'sin firmar'
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