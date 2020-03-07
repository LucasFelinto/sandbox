import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/users/:type', UserController.store);
routes.post('/sessions/:type', SessionController.store);

export default routes;
