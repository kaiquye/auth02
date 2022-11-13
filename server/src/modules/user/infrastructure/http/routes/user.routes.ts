import { Router } from 'express';
import { HttpAdapter } from '../../../../../utils/adapters/httpAdapter';
import UserController from '../controller/user.controller';
import { Post } from '../dto/createUser.dto';
import { dtoValidator } from '../middleware/body.valid';

const userRoutes = Router();

userRoutes.post('/create', dtoValidator(Post), HttpAdapter(UserController.create));

export default userRoutes;
