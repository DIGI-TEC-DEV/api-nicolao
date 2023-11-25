"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empleados_1 = require("../controllers/empleados");
const EmpleadosRouter = (0, express_1.Router)();
EmpleadosRouter.post('/', empleados_1.createEmpleado); // Crear un nuevo empleado
EmpleadosRouter.get('/', empleados_1.getEmpleados); // Obtener la lista de empleados
EmpleadosRouter.get('/:idEmpleado', empleados_1.getEmpleadoById); // Obtener un empleado por ID
EmpleadosRouter.put('/:idEmpleado', empleados_1.updateEmpleado); // Actualizar un empleado por ID
EmpleadosRouter.delete('/:idEmpleado', empleados_1.deleteEmpleado); // Eliminar un empleado por ID
exports.default = EmpleadosRouter;
