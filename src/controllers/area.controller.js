import Area from "../models/Area.js";
import { Op } from "sequelize";

const getAreas = async (req, res) => {
    try {
        const areas = await Area.findAll({
            attributes:['id','area_name','state','createdAt']
        }); //return a array

        //debug
        console.log(areas); // we show the query on console
        res.json(areas) // we send the array en json format
        //res.send('getting projects') // we send a message

    } catch (error) {
        return res.json({ message: error.message });
    }

}

const getAreasByName = async (req, res) => {
    const {name}=req.params;
    try {
        const areas = await Area.findAll({
            where:{
                area_name:{
                    [Op.substring]:name
                }
            },
            attributes:['id','area_name','state','createdAt']
        });
        console.log(areas);
        res.json(areas)

        if (!areas) {
            return res.status(404).json({message:"areas don't exist"})
        }
            
    } catch (error) {
        return res.json({ message: error.message });
    }
}

const getArea = async (req, res) => {
    const {id} =req.params
    try {
        const area = await Area.findOne({
            where:{
                id
            },
            attributes:['area_name','state']
        });
        
        res.json(area)

        if (!area) {
            return res.status(404).json({message:"Area dosn't exists"})
        }
            
    } catch (error) {
        return res.json({ message: error.message });
    }
}

const createArea = async (req, res) => {

    try {
        //code
        const { area_name , state } = req.body
        const newArea = await Area.create({
            area_name,
            state,
        })

        //debug
        console.log(req.body);
        res.json(newArea)
        //res.send('creating project')      
    } catch (error) {
        return res.json({ message: error.message });
    }
}

const updateArea = async (req, res) => {
    try {
        const {id}= req.params
    
        const updateArea= await Area.findByPk(id);
    
        updateArea.set(req.body)

        await updateArea.save();
    
        return res.json(updateArea)

    } catch (error) {
        return res.json({ message: error.message });
    }
}

const deleteArea = async (req, res) => {
    const { id } = req.params;

    try {
        await Area.destroy({
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
    getAreas,
    getAreasByName,
    getArea,
    createArea,
    updateArea,
    deleteArea
}