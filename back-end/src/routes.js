import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import authMiddleware from './app/middlewares/auth';

import FileController from './app/controllers/FileController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import DeliverymanController from './app/controllers/DeliverymanController';
import DeliveryController from './app/controllers/DeliveryController';

const upload = multer(multerConfig);

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.post('/recipients', authMiddleware, RecipientController.store);
routes.put('/recipients/:id', authMiddleware, RecipientController.update);

routes.get('/deliverymen', authMiddleware, DeliverymanController.index);
routes.post('/deliverymen', authMiddleware, DeliverymanController.store);
routes.put('/deliverymen/:id', authMiddleware, DeliverymanController.update);
routes.delete('/deliverymen/:id', authMiddleware, DeliverymanController.delete);

routes.post('/deliveries', authMiddleware, DeliveryController.store);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
