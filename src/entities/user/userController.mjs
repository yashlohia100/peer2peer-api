import catchAsync from '../../utils/catchAsync.mjs';
import User from './userModel.mjs';

export const getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: 'success',
    numResults: users.length,
    users,
  });
});

export const getCurrentlyLoggedInUser = (req, res) => {
  // Protect middleware places user in req.user
  res.status(200).json({
    status: 'success',
    user: req.user,
  });
};
