//@ts-ignore //Para evitar que salga rojo lo del express
import {Request, Response} from "npm:express@4.18.2";
import LibroModel from "../db/libro.ts"

const getLibros = async(_req:Request, res:Response) => {
    try{
        const libros = await LibroModel.find({}).exec(); //Esperamos a coger todos los libros de la base de datos
        res.status(200).json(libros); //Devolvemos los libros en formato json
    }catch(error){
        res.status(500).send(error.message);
        return;
    }
}

export default getLibros;