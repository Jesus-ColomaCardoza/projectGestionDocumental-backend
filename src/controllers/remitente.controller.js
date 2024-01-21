import Area from "../models/Area.js";
import Usuario from "../models/Usuario.js";
import Empleado from "../models/Empleado.js";
import { Op } from "sequelize";
import Remitente from "../models/Remitente.js";


const getSenders = async (req, res) => {
    try {
        const users = await Usuario.findAll(); //return a array

        //debug
        console.log(users); // we show the query on console
        res.json(users) // we send the array en json format
        //res.send('getting projects') // we send a message

    } catch (error) {
        return res.json({ message: error.message });
    }

} //to do
/*const getUsersCustom = async (req, res) => {
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
}*/

const getSenderByNroDocument = async (req, res) => {
    const { nro_document } = req.params
    try {
        const sender = await Remitente.findOne({
            where: {
                nro_document
            },
        });

        res.json(sender)

        if (!sender) {
            return res.status(404).json(null)
        }

    } catch (error) {
        return res.json({ message: error.message });
    }
}
const getSender = async (req, res) => {
    const { id } = req.params
    try {
        const sender = await Remitente.findOne({
            where: {
                id
            },
            // attributes:['user_name','user_password','empleado_id','area_id','user_type']
        });

        res.json(sender)

        if (!sender) {
            return res.status(404).json(null)
        }

    } catch (error) {
        return res.json({ message: error.message });
    }
}
const createSender = async (req, res) => {

    try {
        //code
        const { nro_document,
            sender_name,
            paternal_surname,
            maternal_surname,
            date_birth,
            phone,
            email,
            address,
            representation,
            ruc,
            business_name } = req.body
        const newSender = await Remitente.create({
            nro_document,
            sender_name,
            paternal_surname,
            maternal_surname,
            date_birth,
            phone,
            email,
            address,
            representation,
            ruc,
            business_name

        })

        //debug
        console.log(req.body);
        res.json(newSender)
        //res.send('creating project')
    } catch (error) {
        return res.json({ message: error.message });
    }
}
const updateSender = async (req, res) => {
    try {
        const { id } = req.params

        // const {user_name,user_password,observation,state,user_type}= req.body

        const updateUser = await Usuario.findByPk(id);

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
}//to do
const deleteSender = async (req, res) => {
    const { id } = req.params;

    try {
        await Remitente.destroy({
            where: {
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
    getSenders,
    //getUsersCustom,
    getSenderByNroDocument,

    getSender,
    createSender,
    updateSender,
    deleteSender
}