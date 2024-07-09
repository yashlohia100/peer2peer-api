import { Router } from 'express';
import { getAllUsers, getCurrentlyLoggedInUser } from './userController.mjs';
import { login, logout, protect, signup } from './authController.mjs';

const userRouter = Router();

userRouter.post('/signup', signup);
userRouter.post('/login', login);
userRouter.get('/logout', logout);

userRouter.get('/', getAllUsers);

userRouter.get('/me', protect, getCurrentlyLoggedInUser);

export default userRouter;
