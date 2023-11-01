import { Sequelize, Op, DATE } from "sequelize";
import Empleado from "../models/Empleado.js";

const getEmployees = async (req, res) => {
    try {
        const Employees = await Empleado.findAll({
            attributes: ['id',
                'profile_photo',
                'nro_document',
                'employee_name',
                'paternal_surname',
                'maternal_surname',
                'phone',
                'email',
                'address',
                'state']
        }); //return a array

        //debug
        console.log(Employees); // we show the query on console
        res.json(Employees) // we send the array en json format
        //res.send('getting projects') // we send a message

    } catch (error) {
        return res.json({ message: error.message });
    }

}

const getEmployee = async (req, res) => {
    const { id } = req.params
    try {
        const employee = await Empleado.findOne({
            where: {
                id
            }
        });

        res.json(employee)

        if (!employee) {
            return res.status(404).json({ message: "Employee dosn't exists" })
        }

    } catch (error) {
        return res.json({ message: error.message });
    }
}
const getEmployeesByName = async (req, res) => {
    const { name } = req.params
    try {
        const employees = await Empleado.findAll({
            //     [Sequelize.literal('employee_name || paternal_surname || maternal_surname'), 'complete_name'],
            where: {
                complete_name: {
                    [Op.substring]: name
                }
            },
            attributes: ['id',
                'profile_photo',
                'nro_document',
                [Sequelize.literal('employee_name || paternal_surname || maternal_surname'),'complete_name'],
                'phone',
                'email',
                'address',
                'state']

        });

        res.json(employees)

        if (!employees) {
            return res.status(404).json({ message: "Employee dosn't exist" })
        }

    } catch (error) {
        return res.json({ message: error.message });
    }
}
// const getEmployeesCustom = async (req, res) => {
//     try {
//         const employee = await Empleado.findAll({
//             include:{
//                 model:Area,
//                 required:true,
//                 attributes:['area_name','state']
//             },
//             attributes:['id','user_name','role','state']
//         });

//         res.json(employee)

//         if (!employee) {
//             return res.status(404).json({message:"Employee dosn't exists"})
//         }

//     } catch (error) {
//         return res.json({ message: error.message });
//     }
// }


const createEmployee = async (req, res) => {
    console.log(req.body);
    console.log(req.file);

    res.json({'message':'creating project GAAAAAAAAAAAA'})      

    // try {
    //     //code
    //     const {
    //         employee_name,
    //         paternal_surname,
    //         maternal_surname,
    //         date_birth,
    //         nro_document,
    //         phone,
    //         email,
    //         address,
    //         profile_photo,
    //         state } = req.body
    //     const newEmployee = await Empleado.create({
    //         employee_name,
    //         paternal_surname,
    //         maternal_surname,
    //         date_birth,
    //         nro_document,
    //         phone,
    //         email,
    //         address,
    //         profile_photo,
    //         state
    //     })

    //     //debug
    //     console.log(req.body);
    //     res.json(newEmployee)
    //     //res.send('creating project')      
    // } catch (error) {
    //     return res.json({ message: error.message });
    // }
}

const updateEmployee = async (req, res) => {
    try {
        const { id } = req.params

        const updateEmployee = await Empleado.findByPk(id);

        updateEmployee.set(req.body);

        await updateEmployee.save();

        res.json(updateEmployee)

    } catch (error) {
        return res.json({ message: error.message });
    }
}

const deleteEmployee = async (req, res) => {
    const { id } = req.params;

    try {
        await Empleado.destroy({
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
    getEmployees,
    // getEmployeesCustom,
    getEmployee,
    getEmployeesByName,
    createEmployee,
    updateEmployee,
    deleteEmployee
}