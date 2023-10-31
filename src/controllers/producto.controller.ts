import { Request, Response, NextFunction } from "express";
import prod from "../models/producto.model";
import productos from "../interfaces/producto.interface";
import { NotFoundException } from "../utils/http.exception";

export const index = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const prods = await prod.find();
    return res.status(200).json(prods);
  } catch (error) {
    next(error);
  }
};

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id, nombre, descripcion, precio, imagenUrl} = req.body;

    const prods: productos = new prod({
      id,
      nombre,
      descripcion,
      precio,
      imagenUrl,
    });

    await prods.save();

    return res.status(200).json(prods);
  } catch (error) {
    next(error);
  }
};

export const show = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const prods = await prod.findById(id).orFail(
      new NotFoundException("User not found")
    );
    return res.status(200).json(prods);
  } catch (error) {
    next(error);
  }
};

export const destroy = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const prods = await prod.findById(id).orFail(
      new NotFoundException("User not found")
    );
    await prod.deleteOne();
    return res.status(200).json(prods);
  } catch (error) {
    next(error);
  }
};
