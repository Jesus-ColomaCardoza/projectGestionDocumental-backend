import { Router } from "express";
import { getTiposDocumento, createTipoDocumento, deleteTipoDocumento, updateTipoDocumento, getTipoDocumento, getTiposDocumentoByName } from "../controllers/tipoDocumento.controller.js"

const router = Router();

router.get('/tipodocumento/getlist', getTiposDocumento)
router.get('/tipodocumento/get/:id', getTipoDocumento)
router.get('/tipodocumento/getbyname/:name', getTiposDocumentoByName)
router.post('/tipodocumento/create', createTipoDocumento)
router.put('/tipodocumento/update/:id', updateTipoDocumento)
router.delete('/tipodocumento/delete/:id', deleteTipoDocumento)

export default router;