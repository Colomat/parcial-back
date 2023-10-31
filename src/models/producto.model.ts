import { model, Schema } from "mongoose";

import bcrypt from "bcrypt";
import producto from "../interfaces/producto.interface";

const UserSchema = new Schema<producto>(
  {
    
    nombre: {
      type: String,
      required: [true, "El nombre es obligatorio"],
    },
    descripcion: {
      type: String,
    },
    precio: {
      type: Schema.Types.Number,
      required: [true, "El precio es obligatoria"],
    
    },
    imagenUrl: {
      type: String,
      required: [true, "La imagen es obligatoria"],
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

UserSchema.methods.guardarContraseña =
  async function guardarContraseña(): Promise<boolean> {
    const user = this as any;
    const salt = await bcrypt.genSalt(10);
    user.contraseña = await bcrypt.hash(user.contraseña, salt);
    return true;
  };

UserSchema.methods.validarContraseña = function validarContraseña(
  contraseña: string
): Promise<boolean> {
  return bcrypt.compare(contraseña, (this as any).contraseña);
};

export default model<producto>("producto", UserSchema);
