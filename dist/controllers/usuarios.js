"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getUsers = exports.createUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const usuarios_1 = __importDefault(require("../models/usuarios")); // Asegúrate de importar el modelo correcto
const roles_1 = __importDefault(require("../models/roles"));
const empleados_1 = __importDefault(require("../models/empleados"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idempleado, usuario, password, idrol } = req.body;
    try {
        // Verifica si el usuario ya existe en la base de datos
        const existingUser = yield usuarios_1.default.findOne({ where: { usuario } });
        if (existingUser) {
            return res.status(400).json({ msg: 'El usuario ya existe' });
        }
        // Hashea la contraseña antes de almacenarla en la base de datos
        const saltRounds = 10;
        const hashedPassword = yield bcrypt_1.default.hash(password, saltRounds);
        // Crea un nuevo usuario con la contraseña hasheada
        const newUser = yield usuarios_1.default.create({
            idempleado,
            usuario,
            password: hashedPassword,
            idrol,
        });
        res.status(201).json(newUser);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Ocurrió un error, comuníquese con soporte' });
    }
});
exports.createUser = createUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Obtener todos los usuarios con sus roles asociados
        const usuariosConRoles = yield usuarios_1.default.findAll({
            include: [
                { model: empleados_1.default, as: 'Empleado' },
                { model: roles_1.default, as: 'Rol' }
            ],
        });
        res.json(usuariosConRoles);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al obtener la lista de usuarios con roles' });
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idUsuario } = req.params;
    try {
        const user = yield usuarios_1.default.findByPk(idUsuario);
        if (!user) {
            res.status(404).json({ msg: 'Usuario no encontrado' });
        }
        else {
            res.json(user);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al obtener el usuario' });
    }
});
exports.getUserById = getUserById;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { idUsuario } = req.params;
    try {
        const user = yield usuarios_1.default.findByPk(idUsuario);
        if (user) {
            yield user.update(body);
            res.json({ msg: 'El usuario fue actualizado con éxito' });
        }
        else {
            res.status(404).json({ msg: `No existe un usuario con el id ${idUsuario}` });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Ocurrió un error, comuníquese con soporte' });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idUsuario } = req.params;
    try {
        const user = yield usuarios_1.default.findByPk(idUsuario);
        if (!user) {
            res.status(404).json({ msg: 'Usuario no encontrado' });
        }
        else {
            yield user.destroy();
            res.json({ msg: 'Usuario eliminado con éxito' });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al eliminar el usuario' });
    }
});
exports.deleteUser = deleteUser;
