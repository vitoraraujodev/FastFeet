import { Router } from 'express';

import User from './app/models/User';

import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.get('/', async (req, res) => {
  const { name, email } = await User.findOne({
    where: { name: 'Administrador' },
  });
  return res.json({ user: { name, email } });
});

routes.post('/sessions', SessionController.store);

export default routes;
