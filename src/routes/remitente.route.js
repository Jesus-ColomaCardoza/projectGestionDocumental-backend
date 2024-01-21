import { Router } from "express";
import { createSender, deleteSender, updateSender, getSender, getSenderByNroDocument } from "../controllers/remitente.controller.js"

const router = Router();

//router.get('/usuario/getlist ', getSendersCustom)
router.get('/remitente/getbynrodocument/:nro_document', getSenderByNroDocument)
router.get('/remitente/get/:id', getSender)
router.post('/remitente/create', createSender)
router.put('/remitente/update/:id', updateSender)
router.delete('/remitente/delete/:id', deleteSender)

export default router;