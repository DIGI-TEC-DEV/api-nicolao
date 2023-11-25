"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const roles_1 = __importDefault(require("./roles")); // Importa el modelo de Clientes
const empleados_1 = __importDefault(require("./empleados"));
const Usuarios = connection_1.default.define('Usuarios', {
    idempleado: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    usuario: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    idrol: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
}, {
    createdAt: false,
    updatedAt: false,
    tableName: 'usuario'
});
Usuarios.belongsTo(roles_1.default, { foreignKey: 'idrol', as: 'Rol' }); // Relación co roles
Usuarios.belongsTo(empleados_1.default, { foreignKey: 'idempleado', as: 'Empleado' }); // Relación con empleados
exports.default = Usuarios;
