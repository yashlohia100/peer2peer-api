import { Router } from 'express';
import { getAllUsers } from './userController.mjs';

const userRouter = Router();

userRouter.get('/', getAllUsers);

export default userRouter;
