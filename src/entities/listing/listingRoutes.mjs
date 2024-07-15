import { Router } from 'express';
import {
  createListing,
  deleteListing,
  getAllListings,
  getListing,
  updateListing,
} from './listingController.mjs';

const listingRouter = Router();

listingRouter.route('/').get(getAllListings).post(createListing);

listingRouter
  .route('/:id')
  .get(getListing)
  .patch(updateListing)
  .delete(deleteListing);

export default listingRouter;
