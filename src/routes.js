import { Router } from 'express';

import StudentController from './app/ctrollers/StudentController';
import EmployeeController from './app/ctrollers/EmployeeController'

const routes = new Router();


routes.post('/students', StudentController.store);
routes.post('/employees', EmployeeController.store);


export default routes;
