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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const usuarios_1 = __importDefault(require("../routes/usuarios"));
const empleados_1 = __importDefault(require("../routes/empleados"));
const clientes_1 = __importDefault(require("../routes/clientes"));
const productos_1 = __importDefault(require("../routes/productos"));
const roles_1 = __importDefault(require("../routes/roles"));
const prestamos_1 = __importDefault(require("../routes/prestamos"));
const connection_1 = __importDefault(require("../db/connection"));
const prestamos2_1 = __importDefault(require("../routes/prestamos2"));
const login_1 = __importDefault(require("../routes/login"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto ${this.port}`);
        });
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.json({
                msg: 'API Working'
            });
        });
        this.app.use('/api/login', login_1.default);
        this.app.use('/api/usuarios', usuarios_1.default);
        this.app.use('/api/empleados', empleados_1.default);
        this.app.use('/api/clientes', clientes_1.default);
        this.app.use('/api/productos', productos_1.default);
        this.app.use('/api/roles', roles_1.default);
        this.app.use('/api/prestamos', prestamos_1.default);
        this.app.use('/api/prestamos2', prestamos2_1.default);
    }
    midlewares() {
        // Parseamos el body
        this.app.use(express_1.default.json());
        // Cors
        this.app.use((0, cors_1.default)());
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Base de datos conectada');
            }
            catch (error) {
                console.log(error);
                console.log('Error al conectarse a la base de datos');
            }
        });
    }
}
exports.default = Server;
