import { Router } from 'express';
import userRoutes from '../../modules/user/infrastructure/http/routes/user.routes';

const applicationRoutes = Router();
const baseUrl = '/v1/develop';

applicationRoutes.use(baseUrl + '/user', userRoutes);

export default applicationRoutes;
