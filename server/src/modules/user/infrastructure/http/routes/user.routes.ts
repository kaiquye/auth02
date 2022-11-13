import { Router } from 'express';
import { HttpAdapter } from '../../../../../utils/adapters/httpAdapter';
import UserController from '../controller/user.controller';
import { CreateUserDto } from '../dto/createUser.dto';
import { dtoValidator } from '../../../../../provider/middlewares/validador.transfer.object';
import { LoginUserDto } from '../dto/loginUser.dto';
import AuthMiddleware from '../../../../../provider/middlewares/auth.middleware';

const userRoutes = Router();

userRoutes.post(
  '/create',
  AuthMiddleware,
  dtoValidator(CreateUserDto, 'BODY'),
  HttpAdapter(UserController.create),
);
userRoutes.post('/login', dtoValidator(LoginUserDto, 'BODY'), HttpAdapter(UserController.login));

export default userRoutes;
