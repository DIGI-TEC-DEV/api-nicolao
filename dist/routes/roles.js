"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const roles_1 = require("../controllers/roles");
const RolesRouter = (0, express_1.Router)();
RolesRouter.post('/', roles_1.createRol); // Crear un nuevo rol
RolesRouter.get('/', roles_1.getRoles); // Obtener la lista de roles
RolesRouter.get('/:idRol', roles_1.getRolById); // Obtener un rol por ID
RolesRouter.put('/:idRol', roles_1.updateRol); // Actualizar un rol por ID
RolesRouter.delete('/:idRol', roles_1.deleteRol); // Eliminar un rol por ID
exports.default = RolesRouter;
