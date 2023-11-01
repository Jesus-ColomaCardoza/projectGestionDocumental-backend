import { Router } from "express";
import { getAreas, createArea, deleteArea, updateArea, getArea, getAreasByName } from "../controllers/area.controller.js"

const router = Router();

router.get('/area/getlist', getAreas)
router.get('/area/get/:id', getArea)
router.get('/area/getbyname/:name', getAreasByName)
router.post('/area/create', createArea)
router.put('/area/update/:id', updateArea)
router.delete('/area/delete/:id', deleteArea)

export default router;