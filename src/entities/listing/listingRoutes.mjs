import { Router } from 'express';
import {
  createListing,
  getAllListings,
  getListing,
} from './listingController.mjs';

const listingRouter = Router();

listingRouter.route('/').get(getAllListings).post(createListing);

listingRouter.route('/:id').get(getListing);

export default listingRouter;
