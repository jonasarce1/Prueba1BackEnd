//@ts-ignore //Para evitar que salga rojo lo del express
import {Request, Response} from "npm:express@4.18.2";
import LibroModel from "../db/libro.ts"

const deleteLibro = async(req:Request, res:Response) => {
    try{
        const id = req.params.id;
        if(!id){
            res.status(400).send("Falta el id del libro");
            return;
        }
        const libroBorrado = await LibroModel.findByIdAndDelete(id).exec();
        if(!libroBorrado){
            res.status(404).send("No se ha encontrado el libro");
            return;
        }
        res.status(200).json("Libro borrado correctamente");
    }catch(error){
        res.status(500).send(error.message);
        return;
    }
}

export default deleteLibro;