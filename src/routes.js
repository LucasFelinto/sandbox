import { Router } from 'express';

import StudentController from './app/controllers/StudentController';
import EmployeeController from './app/controllers/EmployeeController'

const routes = new Router();


routes.post('/students', StudentController.store);
routes.post('/employees', EmployeeController.store);


export default routes;
