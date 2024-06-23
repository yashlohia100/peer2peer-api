import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import AppError from '../../utils/AppError.mjs';
import catchAsync from '../../utils/catchAsync.mjs';
import User from './userModel.mjs';

const createSendToken = async (res, user, statusCode) => {
  const jwtSignAsync = promisify(jwt.sign);
  const token = await jwtSignAsync({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: '3d',
  });

  const cookieOptions = {
    maxAge: 3 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  };

  if (process.env.NODE_ENV === 'production') {
    cookieOptions.sameSite = 'none';
    cookieOptions.secure = true;
  }

  res.cookie('jwt', token, cookieOptions);

  user.password = undefined;
  res.status(statusCode).json({
    status: 'success',
    token,
    user,
  });
};

export const signup = catchAsync(async (req, res, next) => {
  const user = await User.create(req.body);

  await createSendToken(res, user, 201);
});

export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // Check if email and password exists
  if (!email || !password) {
    return next(new AppError('Please provide email and password.', 400));
  }

  // Check if user exists with that email (email is valid or not)
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    return next(new AppError('No user exist with that email.', 401));
  }

  // Check if password is correct
  const isCorrect = await user.checkPassword(password);
  if (!isCorrect) {
    return next(new AppError('Incorrect password.', 401));
  }

  await createSendToken(res, user, 200);
});
