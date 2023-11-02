//@ts-ignore //Para evitar que salga rojo lo del express
import express, {Request, Response} from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.3";

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