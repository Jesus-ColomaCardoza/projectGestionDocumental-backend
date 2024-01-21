import Area from "../models/Area.js";
import Usuario from "../models/Usuario.js";
import Empleado from "../models/Empleado.js";
import { Op } from "sequelize";


const getUsers = async (req, res) => {
    try {
        const users = await Usuario.findAll(); //return a array

        //debug
        console.log(users); // we show the query on console
        res.json(users) // we send the array en json format
        //res.send('getting projects') // we send a message

    } catch (error) {
        return res.json({ message: error.message });
    }

}
const getUsersCustom = async (req, res) => {
    try {
        const user = await Usuario.findAll({
            include:[
                {
                    model:Area,
                    required:true,
                    attributes:['area_name']
                },
                {
                    model:Empleado,
                    required:true,
                    attributes:['employee_name','paternal_surname','maternal_surname']
                }
            ],
            attributes:['id','user_name','user_type','state']
        });

        res.json(user)

        if (!user) {
            return res.status(404).json({message:"User dosn't exists"})
        }

    } catch (error) {
        return res.json({ message: error.message });
    }
}
const getUsersByName = async (req, res) => {
    const {name}=req.params;
    try {
        const users = await Usuario.findAll({
            where:{
                user_name:{
                    [Op.substring]:name
                }
            },
            include:[
                {
                    model:Area,
                    required:true,
                    attributes:['area_name']
                },
                {
                    model:Empleado,
                    required:true,
                    attributes:['employee_name','paternal_surname','maternal_surname']
                }
            ],
            attributes:['id','user_name','user_type','state']
        });
        console.log(users);
        res.json(users)

        if (!users) {
            return res.status(404).json({message:"User dosn't exists"})
        }

    } catch (error) {
        return res.json({ message: error.message });
    }
}
const getUserLogin = async (req, res) => {
    const {user_name,user_password} =req.params
    try {
        const user = await Usuario.findOne({
            where:{
                user_name,
                user_password
            },
            include:[
                {
                    model:Area,
                    required:true,
                    attributes:['area_name']
                },
                {
                    model:Empleado,
                    required:true,
                    attributes:['employee_name','paternal_surname','maternal_surname','profile_photo']
                }
            ],
            attributes:['user_name','user_password','state','user_type']
        });

        if (!user) {
            return res.status(404).json(null)
        }else{
            return res.json(user)   
        }

    } catch (error) {
        return res.json({ message: error.message });
    }
}
const getUser = async (req, res) => {
    const {id} =req.params
    try {
        const user = await Usuario.findOne({
            where:{
                id
            },
            attributes:['user_name','user_password','empleado_id','area_id','user_type']
        });

        res.json(user)

        if (!user) {
            return res.status(404).json({message:"User dosn't exists"})
        }

    } catch (error) {
        return res.json({ message: error.message });
    }
}
const createUser = async (req, res) => {

    try {
        //code
        const { user_name, user_password, user_type,area_id,empleado_id } = req.body
        const newUser = await Usuario.create({
            user_name,
            user_password,
            user_type,
            area_id,
            empleado_id

        })

        //debug
        console.log(req.body);
        res.json(newUser)
        //res.send('creating project')
    } catch (error) {
        return res.json({ message: error.message });
    }
}
const updateUser = async (req, res) => {
    try {
        const {id}= req.params

        // const {user_name,user_password,observation,state,user_type}= req.body

        const updateUser= await Usuario.findByPk(id);

        // updateUser.user_name=user_name;
        // updateUser.user_password=user_password;
        // updateUser.observation=observation;
        // updateUser.state=state;
        // updateUser.user_type=user_type;

        updateUser.set(req.body);

        await updateUser.save();

        res.json(updateUser)

    } catch (error) {
        return res.json({ message: error.message });
    }
}
const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        await Usuario.destroy({
            where:{
                id,
            },
        });

        //debug
        res.sendStatus(204)

    } catch (error) {
        return res.json({ message: error.message });
    }
}


export {
    getUsers,
    getUsersCustom,
    getUsersByName,
    getUser,
    getUserLogin,
    createUser,
    updateUser,
    deleteUser
}