import mongoose, { Schema, model, models } from "mongoose";

const propertySchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  priceNumeric: { type: Number, required: true }, // For filtering
  location: {
    city: { type: String, default: "Pune" },
    area: { type: String, required: true },
    address: { type: String },
    coordinates: {
      lat: Number,
      lng: Number,
    },
  },
  type: { 
    type: String, 
    enum: ["Apartment", "Villa", "PG", "Studio", "Commercial", "Plots"], 
    required: true 
  },
  purpose: { type: String, enum: ["Buy", "Rent", "Invest"], required: true },
  specs: {
    beds: { type: Number, default: 0 },
    baths: { type: Number, default: 0 },
    sqft: { type: Number, required: true },
    floor: { type: String },
    furnished: { type: String, enum: ["Fully", "Semi", "Unfurnished"] },
  },
  amenities: [String],
  images: [String],
  videoUrl: String,
  tag: String, // e.g., "Best Seller", "Verified"
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Property = models.Property || model("Property", propertySchema);

export default Property;
