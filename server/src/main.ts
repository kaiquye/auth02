import * as express from 'express';
import 'dotenv/config';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
import applicationRoutes from './shared/routes/application.routes';

const application = function (PORT) {
  const server = express();

  server.use(
    cors({
      origin: ['http://localhost:3000', 'http://127.0.0.1', 'http://104.142.122.231'],
      credentials: true,
      exposedHeaders: ['set-cookie'],
    }),
  );
  server.use(express.json());
  server.use(cookieParser());
  server.use(applicationRoutes);

  server.listen(PORT, () => console.log('Bomb Has Been Planted...'));
};

application(3001);
