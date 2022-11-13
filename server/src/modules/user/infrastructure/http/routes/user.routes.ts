import { Router } from 'express';
import { HttpAdapter } from '../../../../../utils/adapters/httpAdapter';
import UserController from '../controller/user.controller';
import { CreateUserDto } from '../dto/createUser.dto';
import { dtoValidator } from '../../../../../provider/middlewares/validador.transfer.object';

const userRoutes = Router();

userRoutes.post('/create', dtoValidator(CreateUserDto, 'BODY'), HttpAdapter(UserController.create));

export default userRoutes;
