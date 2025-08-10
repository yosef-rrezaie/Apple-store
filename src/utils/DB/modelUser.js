import mongoose, { model, models } from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "User",
  },
  comments: [
    {
      title: String,
      ProductId: String,
      published: { type: Boolean, default: false },
      createdAt: { type: Date, default: Date.now },
    },
  ],
  basket : [{productId : String , number : Number }] ,
  createdAt: { type: Date, default: Date.now },
});

const User = models.User || model("User", UserSchema);
export default User;
