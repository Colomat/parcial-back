"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prodController = __importStar(require("../controllers/producto.controller"));
const productoValidators_1 = require("../middlewares/validators/productoValidators");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const validation_middleware_1 = require("../middlewares/validation.middleware");
const router = (0, express_1.Router)();
// OBTENER TODOS
router.get("/", prodController.index);
// CREAR
router.post("/", ...productoValidators_1.productoValidators, validation_middleware_1.handleValidationErrors, prodController.create);
// OBTENER UNO
router.get("/:id", ...productoValidators_1.mongoIdValidator, validation_middleware_1.handleValidationErrors, auth_middleware_1.authMiddleware, prodController.show);
// BORRAR
router.delete("/:id", ...productoValidators_1.mongoIdValidator, auth_middleware_1.authMiddleware, validation_middleware_1.handleValidationErrors, prodController.destroy);
exports.default = router;
