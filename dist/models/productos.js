"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
class Productos extends sequelize_1.Model {
}
Productos.init({
    descripcion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    fecha_hora: {
        type: sequelize_1.DataTypes.DATE
    }
}, {
    sequelize: connection_1.default,
    modelName: 'Productos',
    timestamps: false
});
exports.default = Productos;
