import * as express from 'express';
import 'dotenv/config';
import applicationRoutes from './provider/routes/application.routes';

const application = function (PORT) {
  const server = express();

  server.use(express.json());
  server.use(applicationRoutes);

  server.listen(PORT, () => console.log('Bomb Has Been Planted...'));
};

application(3001);
