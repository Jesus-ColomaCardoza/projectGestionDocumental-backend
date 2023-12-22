import { DataTypes } from "sequelize";
import sequelize from "../connection/connection.js"

const Tramite=sequelize.define('Tramite', {

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
    observation:{
        type:DataTypes.STRING
    },  
    state:{
        type:DataTypes.ENUM,
        values:['en trámite','finalizado'],
        defaultValue:'en trámite'
    }

}, {
    tableName:'tramites',
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

export default Tramite;