import { Router } from 'express';

import UserController from './app/controllers/UserController';

const routes = new Router();


routes.post('/users/:type', UserController.store);

export default routes;
