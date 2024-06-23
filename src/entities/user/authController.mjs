import catchAsync from '../../utils/catchAsync.mjs';
import User from './userModel.mjs';

export const signup = catchAsync(async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(201).json({
    status: 'success',
    user,
  });
});
