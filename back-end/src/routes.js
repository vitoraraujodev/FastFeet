import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import authMiddleware from './app/middlewares/auth';

import FileController from './app/controllers/FileController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import DeliverymanController from './app/controllers/DeliverymanController';
import DeliveryController from './app/controllers/DeliveryController';
import TakeAwayController from './app/controllers/TakeAwayController';
import ArrivalController from './app/controllers/ArrivalController';
import DeliveryProblemController from './app/controllers/DeliveryProblemController';
import DistributorProblemController from './app/controllers/DistributorProblemController';

import DeliverymanSessionController from './app/controllers/DeliverymanSessionController';

const upload = multer(multerConfig);

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.post('/deliveryman/sessions', DeliverymanSessionController.store);

routes.get('/recipients', authMiddleware, RecipientController.index);
routes.post('/recipients', authMiddleware, RecipientController.store);
routes.put('/recipients/:id', authMiddleware, RecipientController.update);
routes.delete('/recipients/:id', authMiddleware, RecipientController.delete);

routes.get('/deliveryman', authMiddleware, DeliverymanController.index);
routes.post('/deliveryman', authMiddleware, DeliverymanController.store);
routes.put('/deliveryman/:id', authMiddleware, DeliverymanController.update);
routes.delete('/deliveryman/:id', authMiddleware, DeliverymanController.delete);

routes.get('/delivery', authMiddleware, DeliveryController.index);
routes.post('/delivery', authMiddleware, DeliveryController.store);
routes.put('/delivery/:id', authMiddleware, DeliveryController.update);
routes.delete('/delivery/:id', authMiddleware, DeliveryController.delete);

routes.get('/deliveryman/:id/takeaway', TakeAwayController.index);
routes.post('/takeaway', TakeAwayController.store);

routes.get('/deliveryman/:id/deliveries', ArrivalController.index);
routes.post('/arrival', ArrivalController.store);

routes.get('/delivery/:id/problems', DeliveryProblemController.index);
routes.post('/delivery/:id/problems', DeliveryProblemController.store);

routes.get(
  '/delivery/problems',
  authMiddleware,
  DistributorProblemController.index
);
routes.delete(
  '/problem/:id/cancel-delivery',
  authMiddleware,
  DistributorProblemController.delete
);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
