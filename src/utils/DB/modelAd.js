import mongoose, { model , models } from "mongoose";

const AdSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: Number,
  code: Number,
  discount: Number,
  imageUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Ad = models.Ad || model("Ad" , AdSchema)
export default Ad
