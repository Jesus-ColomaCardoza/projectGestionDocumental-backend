import express from "express";
import usuarioRoutes from './routes/usuario.route.js'
import areaRoutes from './routes/area.route.js'
import empleadoRoutes from './routes/empleado.route.js'
import tipoDocumentoRoutes from './routes/tipoDocumento.route.js'
import cors  from "cors";

const app= express();

//middlewares
app.use(express.json()) //the server can receive json responses
app.use(cors()) // error de cors

//routes
app.use(usuarioRoutes);
app.use(areaRoutes);
app.use(empleadoRoutes);
app.use(tipoDocumentoRoutes);

export default app;

