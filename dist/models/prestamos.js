"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const clientes_1 = __importDefault(require("./clientes")); // Importa el modelo de Clientes
const empleados_1 = __importDefault(require("./empleados")); // Importa el modelo de Empleados
const productos_1 = __importDefault(require("./productos")); // Importa el modelo de Productos
class Prestamos extends sequelize_1.Model {
}
Prestamos.init({
    idcliente: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true // Ajustar según la lógica de tu aplicación
    },
    idproducto: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true // Ajustar según la lógica de tu aplicación
    },
    idempleado: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true // Ajustar según la lógica de tu aplicación
    },
    monto: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    fecha_empeno: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    fecha_limite: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize: connection_1.default,
    modelName: 'Prestamos',
    timestamps: false
});
Prestamos.belongsTo(clientes_1.default, { foreignKey: 'idcliente', as: 'Cliente' }); // Relación con Clientes
Prestamos.belongsTo(empleados_1.default, { foreignKey: 'idempleado', as: 'Empleado' }); // Relación con Empleados
Prestamos.belongsTo(productos_1.default, { foreignKey: 'idproducto', as: 'Producto' }); // Relación con Productos
exports.default = Prestamos;
