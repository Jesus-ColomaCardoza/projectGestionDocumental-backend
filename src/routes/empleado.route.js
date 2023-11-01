import { Router } from "express";
import { createEmployee, deleteEmployee, updateEmployee, getEmployee, getEmployees, getEmployeesByName } from "../controllers/empleado.controller.js"
import { photoUpload } from "../middlewares/middlewares.js";

const router = Router();

router.get('/empleado/getlist', getEmployees)
router.get('/empleado/get/:id', getEmployee)
router.get('/empleado/getbyname/:name', getEmployeesByName)
router.post('/empleado/create',photoUpload, createEmployee)
router.put('/empleado/update/:id', updateEmployee)
router.delete('/empleado/delete/:id', deleteEmployee)

export default router;