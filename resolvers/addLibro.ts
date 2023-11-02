//@ts-ignore //Para evitar que salga rojo lo del express
import {Request, Response} from "npm:express@4.18.2";
import LibroModel from "../db/libro.ts"

const addLibro = async(req:Request, res:Response) => {
    try{
        const {titulo, autor, isbn} = req.body;
        if(!titulo || !autor || !isbn){
            res.status(400).send("Faltan datos");
            return;
        }

        const yaExiste = await LibroModel.findOne({isbn}).exec(); //Comprobamos si ya existe un libro con ese isbn

        if(yaExiste){
            res.status(400).send("Faltan datos");
            return;
        }

        const nuevoLibro = new LibroModel({titulo, autor, isbn});
        await nuevoLibro.save();
        res.status(200).json(nuevoLibro); 
    }catch(error){
        res.status(500).send(error.message);
        return;
    }
}

export default addLibro;