import { Router } from 'express';
import { getAllUsers } from './userController.mjs';
import { login, logout, signup } from './authController.mjs';

const userRouter = Router();

userRouter.post('/signup', signup);
userRouter.post('/login', login);
userRouter.get('/logout', logout);

userRouter.get('/', getAllUsers);

export default userRouter;
