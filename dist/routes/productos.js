"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productos_1 = require("../controllers/productos");
const ProductosRouter = (0, express_1.Router)();
ProductosRouter.post('/', productos_1.createProducto); // Crear un nuevo producto
ProductosRouter.get('/', productos_1.getProductos); // Obtener la lista de productos
ProductosRouter.get('/:idProducto', productos_1.getProductoById); // Obtener un producto por ID
ProductosRouter.put('/:idProducto', productos_1.updateProducto); // Actualizar un producto por ID
ProductosRouter.delete('/:idProducto', productos_1.deleteProducto); // Eliminar un producto por ID
exports.default = ProductosRouter;
