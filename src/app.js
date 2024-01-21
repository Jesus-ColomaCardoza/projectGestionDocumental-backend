import express from "express";
import usuarioRoutes from './routes/usuario.route.js'
import areaRoutes from './routes/area.route.js'
import empleadoRoutes from './routes/empleado.route.js'
import tipoDocumentoRoutes from './routes/tipoDocumento.route.js'
import remitente from './routes/remitente.route.js'
import startRoutes from './routes/start.route.js';
import cors  from "cors";
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app= express();

//middlewares
app.use(express.static(path.join(__dirname,'./assets/media/profile_photos')))
app.use(express.json()) //the server can receive json responses
app.use(cors()) // error de cors

//routes
app.use(startRoutes);
app.use(usuarioRoutes);
app.use(areaRoutes);
app.use(empleadoRoutes);
app.use(tipoDocumentoRoutes);
app.use(remitente);

export default app;

