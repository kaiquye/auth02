import { Router } from 'express';
import { HttpAdapter } from '../../../../../utils/adapters/httpAdapter';
import UserController from '../controller/user.controller';
import { CreateUserDto } from '../dto/createUser.dto';
import { dtoValidator } from '../../../../../provider/middlewares/validador.transfer.object';
import { LoginUserDto } from '../dto/loginUser.dto';

const userRoutes = Router();

userRoutes.post('/create', dtoValidator(CreateUserDto, 'BODY'), HttpAdapter(UserController.create));
userRoutes.post('/login', dtoValidator(LoginUserDto, 'BODY'), HttpAdapter(UserController.login));

export default userRoutes;
