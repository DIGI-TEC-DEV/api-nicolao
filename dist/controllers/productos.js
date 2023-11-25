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
exports.getProductos = exports.deleteProducto = exports.updateProducto = exports.getProductoById = exports.createProducto = void 0;
const productos_1 = __importDefault(require("../models/productos"));
const createProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { descripcion, fecha_hora } = req.body;
    try {
        const nuevoProducto = yield productos_1.default.create({
            descripcion,
            fecha_hora
        });
        res.status(201).json(nuevoProducto);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Ocurrió un error al crear el producto' });
    }
});
exports.createProducto = createProducto;
const getProductoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idProducto } = req.params;
    try {
        const producto = yield productos_1.default.findByPk(idProducto);
        if (!producto) {
            res.status(404).json({ msg: 'Producto no encontrado' });
        }
        else {
            res.json(producto);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al obtener el producto' });
    }
});
exports.getProductoById = getProductoById;
const updateProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { idProducto } = req.params;
    try {
        const producto = yield productos_1.default.findByPk(idProducto);
        if (producto) {
            yield producto.update(body);
            res.json({ msg: 'El producto fue actualizado con éxito' });
        }
        else {
            res.status(404).json({ msg: `No existe un producto con el id ${idProducto}` });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Ocurrió un error al actualizar el producto' });
    }
});
exports.updateProducto = updateProducto;
const deleteProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idProducto } = req.params;
    try {
        const producto = yield productos_1.default.findByPk(idProducto);
        if (!producto) {
            res.status(404).json({ msg: 'Producto no encontrado' });
        }
        else {
            yield producto.destroy();
            res.json({ msg: 'Producto eliminado con éxito' });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al eliminar el producto' });
    }
});
exports.deleteProducto = deleteProducto;
const getProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productos = yield productos_1.default.findAll();
        res.json(productos);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al obtener la lista de productos' });
    }
});
exports.getProductos = getProductos;
