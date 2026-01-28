import { Router } from 'express';

import ProductController from './app/controller/ProductController.js';
import SessionController from './app/controller/SessionController.js';
import UserController from './app/controller/UserController.js';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store)
routes.post('/products', ProductController.store);

export default routes;















// Metodos HTTP -> 
/* 
POST -> criar
PUT/PATCH -> atualizar, patch atualiza somente um campo
GET -> buscar/listar
DELETE -> deletar
*/