import { Router } from 'express';
import { HttpAdapter } from '../../../../../utils/adapters/httpAdapter';
import UserController from '../controller/user.controller';
import { CreateUserDto } from '../dto/createUser.dto';
import { dtoValidator } from '../../../../../provider/middlewares/validador.transfer.object';
import { LoginUserDto } from '../dto/loginUser.dto';
import AuthMiddleware from '../../../../../provider/middlewares/auth.middleware';
import RefreshTokenMiddleware from '../../../../../provider/middlewares/refreshToken.middleware';

const userRoutes = Router();

userRoutes.post(
  '/create',
  AuthMiddleware,
  dtoValidator(CreateUserDto, 'BODY'),
  HttpAdapter(UserController.create, 'add-user-infos'),
);
userRoutes.post('/login', dtoValidator(LoginUserDto, 'BODY'), HttpAdapter(UserController.login));
userRoutes.post('/refresh-token', RefreshTokenMiddleware, HttpAdapter(UserController.refreshToken));

export default userRoutes;
