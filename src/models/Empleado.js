import { DataTypes } from "sequelize";
import sequelize from "../connection/connection.js"
import Usuario from "./Usuario.js";

const Empleado=sequelize.define('Empleado', {

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
        type:DataTypes.STRING
    },
    state:{
        type:DataTypes.ENUM,
        values:['activo','inactivo'],
        defaultValue:'activo'
    }

}, {
    tableName:'empleados',
    timestamps:false

})

Empleado.hasMany(Usuario,{
    foreignKey:'empleado_id',
    sourceKey:'id'
})

Usuario.belongsTo(Empleado,{
    foreignKey:'empleado_id',
    targetKey:'id'
})

export default Empleado;