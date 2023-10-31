import { Document } from "mongoose";

interface producto extends Document {
 
  nombre: string;
  descripcion: string;
  precio: number;
  imagenUrl: string;

}

export default producto;
