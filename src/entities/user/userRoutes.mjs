import { Router } from 'express';
import { getAllUsers } from './userController.mjs';
import { signup } from './authController.mjs';

const userRouter = Router();

userRouter.post('/signup', signup);

userRouter.get('/', getAllUsers);

export default userRouter;
