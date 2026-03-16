import mongoose, { Schema, model, models } from "mongoose";

const leadSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  propertyId: { type: Schema.Types.ObjectId, ref: "Property" },
  message: { type: String },
  type: { type: String, enum: ["Inquiry", "Visit", "Call Request"], default: "Inquiry" },
  status: { type: String, enum: ["New", "Contacted", "Closed"], default: "New" },
  createdAt: { type: Date, default: Date.now },
});

const Lead = models.Lead || model("Lead", leadSchema);

export default Lead;
