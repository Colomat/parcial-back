import { Router } from "express";
import * as prodController from "../controllers/producto.controller";
import {
    productoValidators,
    mongoIdValidator
  } from "../middlewares/validators/productoValidators";
import { authMiddleware } from "../middlewares/auth.middleware";
import { handleValidationErrors } from "../middlewares/validation.middleware";

const router = Router();

// OBTENER TODOS
router.get("/",prodController.index);
// CREAR

router.post("/",...productoValidators,handleValidationErrors,prodController.create);
// OBTENER UNO
router.get("/:id",...mongoIdValidator,handleValidationErrors,authMiddleware, prodController.show);
// BORRAR
router.delete("/:id",...mongoIdValidator,authMiddleware,handleValidationErrors, prodController.destroy);

export default router;