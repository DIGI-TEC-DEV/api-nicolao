"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientes_1 = require("../controllers/clientes");
const ClientesRouter = (0, express_1.Router)();
ClientesRouter.post('/', clientes_1.createCliente); // Crear un nuevo cliente
ClientesRouter.get('/', clientes_1.getClientes); // Obtener la lista de clientes
ClientesRouter.get('/:idCliente', clientes_1.getClienteById); // Obtener un cliente por ID
ClientesRouter.put('/:idCliente', clientes_1.updateCliente); // Actualizar un cliente por ID
ClientesRouter.delete('/:idCliente', clientes_1.deleteCliente); // Eliminar un cliente por ID
exports.default = ClientesRouter;
