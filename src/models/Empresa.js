import { DataTypes } from "sequelize";
import sequelize from "../connection/connection.js"

const Empresa=sequelize.define('Empresa', {

    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    ruc:{
        type:DataTypes.STRING(12)
    }, 
    business_name:{
        type:DataTypes.STRING,
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
    logo:{
        type:DataTypes.STRING
    },  
    state:{
        type:DataTypes.ENUM,
        values:['activo','inactivo'],
        defaultValue:'activo'
    }

}, {
    tableName:'empresas',
})

// Remitente.hasMany(Usuario,{
//     foreignKey:'empleado_id',
//     sourceKey:'id'
// })

// Usuario.belongsTo(Remitente,{
//     foreignKey:'empleado_id',
//     targetKey:'id'
// })

export default Empresa;