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
exports.login = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const usuarios_1 = __importDefault(require("../models/usuarios"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuario, password } = req.body;
    try {
        // Buscar el usuario por nombre de usuario
        const user = yield usuarios_1.default.findOne({ where: { usuario } });
        if (!user) {
            return res.status(404).json({ msg: 'Nombre de usuario incorrecto' });
        }
        // Verificar la contraseña
        const hashedPasswordFromDB = user.get('password');
        console.log('Contraseña ingresada:', password);
        console.log('Contraseña almacenada:', hashedPasswordFromDB);
        const match = yield bcrypt_1.default.compare(password, hashedPasswordFromDB);
        if (!match) {
            return res.status(401).json({ msg: 'Contraseña incorrecta' });
        }
        // Verificar el rol del usuario
        const idempleado = user.get('idempleado');
        const rol = user.get('idrol');
        if (Number(rol) !== 1) {
            return res.status(403).json({ msg: 'Acceso no autorizado' });
        }
        // En este punto, el inicio de sesión es exitoso y el usuario tiene el rol correcto
        res.json({ msg: 'Inicio de sesión exitoso', rol, idempleado });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Ocurrió un error, comuníquese con soporte' });
    }
});
exports.login = login;
