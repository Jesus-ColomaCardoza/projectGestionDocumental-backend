import TipoDocumento from "../models/TipoDocumento.js";
import { Op } from "sequelize";

const getTiposDocumento = async (req, res) => {
    try {
        const tiposDocumento = await TipoDocumento.findAll({
            attributes:['id','description','state','createdAt']
        }); //return a array

        //debug
        console.log(tiposDocumento); // we show the query on console
        res.json(tiposDocumento) // we send the array en json format
        //res.send('getting projects') // we send a message

    } catch (error) {
        return res.json({ message: error.message });
    }

}

const getTiposDocumentoByName = async (req, res) => {
    const {name}=req.params;
    try {
        const tiposDocumento = await TipoDocumento.findAll({
            where:{
                description:{
                    [Op.substring]:name
                }
            },
            attributes:['id','description','state','createdAt']
        });
        console.log(tiposDocumento);
        res.json(tiposDocumento)

        if (!tiposDocumento) {
            return res.status(404).json({message:"tipos Documento don't exist"})
        }
            
    } catch (error) {
        return res.json({ message: error.message });
    }
}

const getTipoDocumento = async (req, res) => {
    const {id} =req.params
    try {
        const tipoDocumento = await TipoDocumento.findOne({
            where:{
                id
            },
            attributes:['description','state']
        });
        
        res.json(tipoDocumento)

        if (!tipoDocumento) {
            return res.status(404).json({message:"Tipo Documento doesn't exist"})
        }
            
    } catch (error) {
        return res.json({ message: error.message });
    }
}

const createTipoDocumento = async (req, res) => {

    try {
        //code
        const { description , state } = req.body
        const newTipoDocumento = await TipoDocumento.create({
            description,
            state,
        })

        //debug
        console.log(req.body);
        res.json(newTipoDocumento)
        //res.send('creating project')      
    } catch (error) {
        return res.json({ message: error.message });
    }
}

const updateTipoDocumento = async (req, res) => {
    try {
        const {id}= req.params
    
        const updateTipoDocumento= await TipoDocumento.findByPk(id);
    
        updateTipoDocumento.set(req.body)

        await updateTipoDocumento.save();
    
        return res.json(updateTipoDocumento)

    } catch (error) {
        return res.json({ message: error.message });
    }
}

const deleteTipoDocumento = async (req, res) => {
    const { id } = req.params;

    try {
        await TipoDocumento.destroy({
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
    getTiposDocumento,
    getTiposDocumentoByName,
    getTipoDocumento,
    createTipoDocumento,
    updateTipoDocumento,
    deleteTipoDocumento
}