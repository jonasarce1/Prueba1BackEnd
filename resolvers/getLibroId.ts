//@ts-ignore //Para evitar que salga rojo lo del express
import {Request, Response} from "npm:express@4.18.2";
import LibroModel from "../db/libro.ts"

const getLibroId = async(req:Request, res:Response) => {
    try{
        const id = req.params.id;
        const libro = await LibroModel.findById(id).exec();
        if(!libro){
            res.status(404).send("No existe ningun libro con ese id");
            return;
        }
        res.status(200).json(libro);
    }catch(error){
        res.status(500).send(error.message);
        return;
    }
}

export default getLibroId;