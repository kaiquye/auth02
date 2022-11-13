import { Router } from 'express';
import { HttpAdapter } from '../../../../../utils/adapters/httpAdapter';
import UserController from '../controller/user.controller';
import { Post } from '../dto/createUser.dto';
import { dtoValidator } from '../middleware/body.valid';

const userRoutes = Router();

userRoutes.post('/create', dtoValidator(Post), HttpAdapter(UserController.create));

// userRoutes.post(
//   '/create',
//   async (req, res) => {
//     try {
//       const user = new Post(req.body.title, req.body.text);
//       const error = await user.isValid();
//     } catch (e) {
//       console.log('erroroooo', e);
//     }
//   },
//   HttpAdapter(UserController.create),
// );

export default userRoutes;
