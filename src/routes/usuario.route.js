import { Router } from "express";
import { createUser, deleteUser, updateUser, getUser, getUsersCustom, getUsersByName } from "../controllers/usuario.controller.js"

const router = Router();

router.get('/usuario/getlist', getUsersCustom)
router.get('/usuario/get/:id', getUser)
router.get('/usuario/getbyname/:name', getUsersByName)
router.post('/usuario/create', createUser)
router.put('/usuario/update/:id', updateUser)
router.delete('/usuario/delete/:id', deleteUser)

export default router;