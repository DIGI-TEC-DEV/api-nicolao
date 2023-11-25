"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prestamos_1 = require("../controllers/prestamos");
const PrestamosRouter = (0, express_1.Router)();
PrestamosRouter.post('/', prestamos_1.createPrestamo); // Crear un nuevo préstamo
PrestamosRouter.get('/', prestamos_1.getPrestamos); // Obtener la lista de préstamos
PrestamosRouter.get('/:idCliente', prestamos_1.getPrestamosByClientId); // Obtener un préstamo por ID
PrestamosRouter.put('/:idPrestamo', prestamos_1.updatePrestamo); // Actualizar un préstamo por ID
PrestamosRouter.delete('/:idPrestamo', prestamos_1.deletePrestamo); // Eliminar un préstamo por ID
exports.default = PrestamosRouter;
