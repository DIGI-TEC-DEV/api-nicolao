"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_1 = require("../controllers/usuarios");
const Usuariorouter = (0, express_1.Router)();
// Rutas para Usuarios
Usuariorouter.post('/', usuarios_1.createUser); // Crear un nuevo usuario
Usuariorouter.get('/', usuarios_1.getUsers); // Obtener la lista de usuarios
Usuariorouter.get('/:idUsuario', usuarios_1.getUserById); // Obtener un usuario por ID
Usuariorouter.put('/:idUsuario', usuarios_1.updateUser); // Actualizar un usuario por ID
Usuariorouter.delete('/:idUsuario', usuarios_1.deleteUser); // Eliminar un usuario por ID
exports.default = Usuariorouter;
