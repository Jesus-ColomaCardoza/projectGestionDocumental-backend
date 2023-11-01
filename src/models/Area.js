import { DataTypes } from "sequelize";
import sequelize from "../connection/connection.js"
import Usuario from "./Usuario.js";

const Area=sequelize.define('Area', {

    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    area_name:{
        type:DataTypes.STRING,
    },
    state:{
        type:DataTypes.ENUM,
        values:['activo','inactivo'],
        defaultValue:'activo'
    }

}, {
    tableName:'areas'
})

Area.hasMany(Usuario,{
    foreignKey:'area_id',
    sourceKey:'id'
});
Usuario.belongsTo(Area,{
    foreignKey:'area_id',
    targetKey:'id'
});

export default Area;

