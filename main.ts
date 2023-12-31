import express from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.3";

import getLibros from "./resolvers/getLibros.ts";
import getLibroId from "./resolvers/getLibroId.ts";
import getLibroIsbn from "./resolvers/getLibroIsbn.ts";
import addLibro from "./resolvers/addLibro.ts";
import putLibro from "./resolvers/putLibro.ts";
import deleteLibro from "./resolvers/deleteLibro.ts";

import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
const env = await load();

const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL"); //Obtenemos la variable de entorno MONGO_URL ya sea de .env o de las variables de entorno del sistema

if(!MONGO_URL){
  console.log("No se ha encontrado la variable de entorno MONGO_URL");
  Deno.exit(1);
}

await mongoose.connect(MONGO_URL);

const app = express();

app.use(express.json());

app.get("/api/libros", getLibros);
app.get("/api/libroid/:id", getLibroId);
app.get("/api/libroisbn/:isbn", getLibroIsbn);
app.post("/api/libros", addLibro);
app.put("/api/libros/:id", putLibro);
app.delete("/api/libros/:id", deleteLibro);

app.listen(3000, () => console.log("Servidor activo en puerto 3000"));