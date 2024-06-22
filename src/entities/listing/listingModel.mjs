import { Schema, model } from 'mongoose';

const listingSchema = new Schema({
  location: {
    type: String,
    required: true,
  },
  lookingFor: {
    type: String,
    required: true,
    enum: ['male', 'female', 'anyone'],
  },
  occupancy: {
    type: String,
    required: true,
    enum: ['single', 'dual', 'any'],
  },
  rent: {
    type: Number,
    required: true,
    min: 0,
  },
});

const Listing = model('Listing', listingSchema);
export default Listing;
