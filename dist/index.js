"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./models/server"));
// import dotenv from 'dotenv'
// Configuramos las variables de ambiente
// dotenv.config();
const server = new server_1.default();
