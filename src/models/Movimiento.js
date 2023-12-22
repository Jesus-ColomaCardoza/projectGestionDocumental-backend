import { DataTypes } from "sequelize";
import sequelize from "../connection/connection.js"

const Movimiento=sequelize.define('Movimiento', {

    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },       
    date_registration:{
        type:DataTypes.DATEONLY,
    },  
    description:{
        type:DataTypes.STRING
    },  
    state:{
        type:DataTypes.ENUM,
        values:['sin firmar','firmado'],
        defaultValue:'sin firmar'
    }

}, {
    tableName:'movimientos',
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

export default Movimiento;