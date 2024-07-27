import express from "express";
import peliculasRoutes from "./routes/peliculas.routes.js";
import clientesRoutes from "./routes/clientes.routes.js";
import loginRoutes from "./routes/login.routes.js";


const app = express();

app.use(express.json());
app.use(peliculasRoutes);
app.use(clientesRoutes);
app.use(loginRoutes);
export default app;
