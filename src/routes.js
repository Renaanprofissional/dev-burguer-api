import { Router } from 'express';
import multer from 'multer';

import CategoryController from './app/controller/CategoryController.js';
import ProductController from './app/controller/ProductController.js';
import SessionController from './app/controller/SessionController.js';
import UserController from './app/controller/UserController.js';

import multerConfig from './config/multer.cjs';
import adminMiddleware from './middlewares/admin.js';
import authMiddleware from './middlewares/auth.js';


const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware);
// All routes below are protected.
routes.post(
  '/products',
  adminMiddleware,
  upload.single('file'),
  ProductController.store,
);

routes.put(
  '/products/:id',
  adminMiddleware,
  upload.single('file'),
  ProductController.update,
);

routes.get('/products', ProductController.index);

routes.post('/categories', adminMiddleware, CategoryController.store);
routes.get('/categories', CategoryController.index);

export default routes;

// Metodos HTTP ->
/* 
POST -> criar
PUT/PATCH -> atualizar, patch atualiza somente um campo
GET -> buscar/listar
DELETE -> deletar
*/
