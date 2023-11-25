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
exports.getPrestamosByClientId = exports.getPrestamos = void 0;
const prestamos_1 = __importDefault(require("../models/prestamos"));
const clientes_1 = __importDefault(require("../models/clientes"));
const empleados_1 = __importDefault(require("../models/empleados"));
const productos_1 = __importDefault(require("../models/productos"));
const getPrestamos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Obtener todos los préstamos con datos de clientes, empleados y productos asociados
        const prestamos = yield prestamos_1.default.findAll({
            include: [
                { model: clientes_1.default, as: 'Cliente' },
                { model: empleados_1.default, as: 'Empleado' },
                { model: productos_1.default, as: 'Producto' }
            ]
        });
        res.json(prestamos);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al obtener la lista de préstamos' });
    }
});
exports.getPrestamos = getPrestamos;
const getPrestamosByClientId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idCliente } = req.params;
    try {
        // Obtener los préstamos del cliente por su ID de cliente con datos de clientes, empleados y productos asociados
        const prestamosCliente = yield prestamos_1.default.findAll({
            where: { idcliente: idCliente },
            include: [
                { model: clientes_1.default, as: 'Cliente' },
                { model: empleados_1.default, as: 'Empleado' },
                { model: productos_1.default, as: 'Producto' }
            ]
        });
        if (prestamosCliente.length === 0) {
            res.status(404).json({ msg: 'El cliente no tiene préstamos asociados' });
        }
        else {
            res.json(prestamosCliente);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al obtener los préstamos del cliente' });
    }
});
exports.getPrestamosByClientId = getPrestamosByClientId;
