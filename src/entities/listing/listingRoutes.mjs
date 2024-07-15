import { Router } from 'express';
import {
  createListing,
  getAllListings,
  getListing,
  updateListing,
} from './listingController.mjs';

const listingRouter = Router();

listingRouter.route('/').get(getAllListings).post(createListing);

listingRouter.route('/:id').get(getListing).patch(updateListing);

export default listingRouter;
