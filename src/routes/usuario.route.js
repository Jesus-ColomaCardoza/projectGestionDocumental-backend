import { Router } from "express";
import { createUser, deleteUser, updateUser, getUser, getUsersCustom, getUsersByName,getUserLogin } from "../controllers/usuario.controller.js"

const router = Router();

router.get('/usuario/getlist', getUsersCustom)
router.get('/usuario/get/:id', getUser)
router.get('/usuario/getbyname/:name', getUsersByName)
router.get('/usuario/getLogin/:user_name/:user_password', getUserLogin)
router.post('/usuario/create', createUser)
router.put('/usuario/update/:id', updateUser)
router.delete('/usuario/delete/:id', deleteUser)

export default router;