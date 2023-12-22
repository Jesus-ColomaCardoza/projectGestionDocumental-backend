import { DataTypes } from "sequelize";
import sequelize from "../connection/connection.js"
// import Documento from "./Documento.js";

const TipoDocumento=sequelize.define('TipoDocumento', {

    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    description:{
        type:DataTypes.STRING,
    },
    state:{
        type:DataTypes.ENUM,
        values:['activo','inactivo'],
        defaultValue:'activo'
    }

}, {
    tableName:'tiposDocumento'
})

// TipoDocumento.hasMany(Documento,{
//     sourceKey:'id',
//     foreignKey:'tipodocumento_id'
// });
// Documento.belongsTo(TipoDocumento,{
//     foreignKey:'tipodocumento_id',
//     targetKey:'id'
// });

export default TipoDocumento;

