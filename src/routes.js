import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users/:type', UserController.store);
routes.post('/sessions/:type', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
