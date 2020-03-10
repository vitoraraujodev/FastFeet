import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.post('/recipients', authMiddleware, RecipientController.store);
routes.put('/recipients/:id', authMiddleware, RecipientController.update);

export default routes;
