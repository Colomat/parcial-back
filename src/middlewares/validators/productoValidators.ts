import { check, ValidationChain } from "express-validator";



export const productoValidators: Array<ValidationChain> = [
  check("nombre").isLength({ min: 3}).isLength({max:20}).withMessage("El nombre es obligatorio"),
  check("descripcion").isLength({ min: 10}).withMessage("El debe tener minimo 10 caracteres"),
  check("precio")
  .isFloat({ min: 0 })
  .withMessage("El precio no puede ser negativo"),
    check("imagenUrl").isURL().withMessage("la imagen es obligatorio y debe ser una URL"),
];
export const mongoIdValidator:Array<ValidationChain> = [
check("id").isMongoId().withMessage("El ID proporcionado no es válido para MongoDB.")];
