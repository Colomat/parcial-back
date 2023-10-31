import { Application } from "express";
import userRoutes from "../routes/user.route";
import authRoutes from "../routes/auth.routes";
import prodRoutes from "../routes/producto.routes";
import logger from "../utils/logger";

export const register = async (app: Application) => {
  app.use("/users", userRoutes);
  app.use("/auth", authRoutes);
  app.use("/productos", prodRoutes);
  logger.info("🟢 Routes registered");
};
