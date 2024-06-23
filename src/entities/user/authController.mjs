import AppError from '../../utils/AppError.mjs';
import catchAsync from '../../utils/catchAsync.mjs';
import User from './userModel.mjs';

export const signup = catchAsync(async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(201).json({
    status: 'success',
    user,
  });
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

  // Send JWT token

  res.status(200).json({
    status: 'success',
    user,
  });
});
