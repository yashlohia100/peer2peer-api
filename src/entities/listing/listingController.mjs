import AppError from '../../utils/AppError.mjs';
import catchAsync from '../../utils/catchAsync.mjs';
import Listing from './listingModel.mjs';

export const getAllListings = catchAsync(async (req, res, next) => {
  const listings = await Listing.find();

  res.status(200).json({
    status: 'success',
    numResults: listings.length,
    listings,
  });
});

export const createListing = catchAsync(async (req, res, next) => {
  const listing = await Listing.create(req.body);

  res.status(201).json({
    status: 'success',
    listing,
  });
});

export const getListing = catchAsync(async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);

  if (!listing) {
    return next(new AppError('No listing found with that id.', 404));
  }

  res.status(200).json({
    status: 'success',
    listing,
  });
});
