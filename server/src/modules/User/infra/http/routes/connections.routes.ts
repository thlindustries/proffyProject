import { Router } from 'express';
import ConnectionController from '@modules/User/infra/http/controllers/ConnectionController';

const usersRoutes = Router();

const connectionController = new ConnectionController();

usersRoutes.post('/', connectionController.create);
usersRoutes.get('/', connectionController.index);

export default usersRoutes;
