import { Schema, model } from 'mongoose';
import {
  cities,
  facilities,
  highlightsRoom,
  highlightsRoommate,
  preferences,
} from './listingValidators.mjs';

const listingSchema = new Schema({
  location: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
    enum: cities,
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
  listingType: {
    type: String,
    required: true,
    enum: ['room', 'roommate'],
  },
  preferences: {
    type: [String],
    required: true,
    enum: preferences,
  },
  facilities: {
    type: [String],
    enum: facilities,
  },
  highlights: {
    type: [String],
    required: true,
    enum: [...highlightsRoom, ...highlightsRoommate],
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
  },
});

const Listing = model('Listing', listingSchema);
export default Listing;
