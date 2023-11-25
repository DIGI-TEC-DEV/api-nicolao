"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
class Empleados extends sequelize_1.Model {
}
Empleados.init({
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    dni: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    direccion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    correo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING
    },
    sexo: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    sequelize: connection_1.default,
    modelName: 'empleados',
    timestamps: false
});
exports.default = Empleados;
