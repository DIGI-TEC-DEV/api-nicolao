"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const clientes = connection_1.default.define('clientes', {
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
        unique: true,
        allowNull: false
    },
    direccion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    sexo: {
        type: sequelize_1.DataTypes.CHAR,
        allowNull: false
    },
}, {
    createdAt: false,
    updatedAt: false,
});
exports.default = clientes;
