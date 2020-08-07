import { Router } from 'express';

import classesRoutes from '@modules/Classe/infra/http/routes/classes.routes';
import connectionRoutes from '@modules/User/infra/http/routes/connections.routes';
import testingRoutes from './testingRoutes';

const routes = Router();

routes.use(testingRoutes);
routes.use('/connections', connectionRoutes);
routes.use('/classes', classesRoutes);

export default routes;
