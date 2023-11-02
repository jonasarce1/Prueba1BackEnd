//@ts-ignore //Para evitar que salga rojo lo del express
import {Request, Response} from "npm:express@4.18.2";
import LibroModel from "../db/libro.ts"

const getLibroIsbn = async(req:Request, res:Response) => {
    try{
        const isbn = req.params.isbn;
        if(!isbn){
            res.status(400).send("Falta el isbn");
            return;
        }
        const libro = await LibroModel.findOne({isbn}).exec();
        if(!libro){
            res.status(404).send("No existe ningun libro con ese isbn");
            return;
        }
        res.status(200).json(libro);
    }catch(error){
        res.status(500).send(error.message);
        return;
    }
}

export default getLibroIsbn;