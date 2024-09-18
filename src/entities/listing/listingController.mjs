import ApiFeatures from '../../utils/ApiFeatures.mjs';
import AppError from '../../utils/AppError.mjs';
import catchAsync from '../../utils/catchAsync.mjs';
import Listing from './listingModel.mjs';

export const getAllListings = catchAsync(async (req, res, next) => {
  const features = new ApiFeatures(Listing.find(), req.query)
    .filter()
    .sort()
    .select()
    .paginate();

  const listings = await features.query.populate('user');

  res.status(200).json({
    status: 'success',
    numResults: listings.length,
    listings,
  });
});

// Middleware
export const addUserToBody = (req, res, next) => {
  if (!req.body.user) {
    req.body.user = req.user.id;
  }
  next();
};

export const createListing = catchAsync(async (req, res, next) => {
  const listing = await Listing.create(req.body);

  res.status(201).json({
    status: 'success',
    listing,
  });
});

export const getListing = catchAsync(async (req, res, next) => {
  const listing = await Listing.findById(req.params.id).populate('user');

  if (!listing) {
    return next(new AppError('No listing found with that id.', 404));
  }

  res.status(200).json({
    status: 'success',
    listing,
  });
});

export const updateListing = catchAsync(async (req, res, next) => {
  const listing = await Listing.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!listing) {
    return next(new AppError('No listing found with that id.', 404));
  }

  res.status(200).json({
    status: 'success',
    listing,
  });
});

export const deleteListing = catchAsync(async (req, res, next) => {
  const listing = await Listing.findByIdAndDelete(req.params.id);

  if (!listing) {
    return next(new AppError('No listing found with that id.', 404));
  }

  res.status(200).json({
    status: 'success',
    listing,
  });
});
