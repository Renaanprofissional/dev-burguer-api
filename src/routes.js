import { Router } from 'express';
import multer from 'multer';
import ProductController from './app/controller/ProductController.js';
import SessionController from './app/controller/SessionController.js';
import UserController from './app/controller/UserController.js';
import multerConfig from './config/multer.cjs';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);
routes.post('/products', upload.single('file'), ProductController.store);

export default routes;

// Metodos HTTP ->
/* 
POST -> criar
PUT/PATCH -> atualizar, patch atualiza somente um campo
GET -> buscar/listar
DELETE -> deletar
*/
