import mongoose from "npm:mongoose@7.6.3"; 
import {Libro} from "../types.ts"

const Schema = mongoose.Schema;

const libroSchema = new Schema({
    titulo:{type:String, required:true},
    autor:{type:String, required:true},
    isbn:{type:String, required:true}
})

type LibroModelType = mongoose.Document & Omit<Libro, "id">

export default mongoose.model<LibroModelType>("Libro", libroSchema)