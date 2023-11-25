"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prestamos2_1 = require("../controllers/prestamos2");
const Prestamos2Router = (0, express_1.Router)();
Prestamos2Router.get('/', prestamos2_1.getPrestamos); // Obtener la lista de préstamos
Prestamos2Router.get('/:idCliente', prestamos2_1.getPrestamosByClientId); // Obtener un préstamo por ID
exports.default = Prestamos2Router;
