import Listing from './listingModel.mjs';

export const getAllListings = async (req, res, next) => {
  const listings = await Listing.find();

  res.status(200).json({
    status: 'success',
    numResults: listings.length,
    listings,
  });
};

export const getListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);

  res.status(200).json({
    status: 'success',
    listing,
  });
};

export const createListing = async (req, res, next) => {
  const listing = await Listing.create(req.body);

  res.status(201).json({
    status: 'success',
    listing,
  });
};
