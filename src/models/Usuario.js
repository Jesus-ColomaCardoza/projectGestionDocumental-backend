import { DataTypes } from "sequelize";
import sequelize from "../connection/connection.js"

const Usuario=sequelize.define('Usuario', {

    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    user_name:{
        type:DataTypes.STRING,
    },
    user_password:{
        type:DataTypes.STRING,
    },
    state:{
        type:DataTypes.ENUM,
        values:['activo','inactivo'],
        defaultValue:'activo'
    },
    user_type:{
        type:DataTypes.ENUM,
        values:['admin','user'],
    }

}, {
    tableName:'usuarios'
})

export default Usuario;