import { Router } from 'express';
import {
  addUserToBody,
  createListing,
  deleteListing,
  getAllListings,
  getListing,
  updateListing,
} from './listingController.mjs';
import { protect } from '../user/authController.mjs';

const listingRouter = Router();

listingRouter
  .route('/')
  .get(getAllListings)
  .post(protect, addUserToBody, createListing);

listingRouter
  .route('/:id')
  .get(getListing)
  .patch(updateListing)
  .delete(deleteListing);

export default listingRouter;
