//@ts-ignore //Para evitar que salga rojo lo del express
import {Request, Response} from "npm:express@4.18.2";
import LibroModel from "../db/libro.ts"

const putLibro = async(req:Request, res:Response) => {
    try{
        const id = req.params.id;
        const {titulo, autor, isbn} = req.body;
        
        if(!id){
            res.status(400).send("Falta el id del libro");
            return;
        }

        const libro = await LibroModel.findById(id).exec();

        if(!libro){
            res.status(404).send("No existe un libro con ese id");
            return;
        }

        if(titulo){
            libro.titulo = titulo;
        }

        if(autor){
            libro.autor = autor;
        }

        if(isbn){
            libro.isbn = isbn;
        }

        await libro.save();

        res.status(200).json(libro);

        //Otra manera:

        //const libroActualizado = LibroModel.findByIdAndUpdate(id, {titulo, autor, isbn}).exec(); 
        //res.status(200).json(libroActualizado);

    }catch(error){
        res.status(500).send(error.message);
        return;
    }
}

export default putLibro;