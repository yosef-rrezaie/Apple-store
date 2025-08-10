import { connectDB } from "@/utils/DB/connectDB";
import User from "@/utils/DB/modelUser";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
    const { email, productId, number } = await req.json();
    const user = await User.findOne({ email });
    const existingItem = user.basket.find(
      (item) => item.productId === productId
    );

    if (existingItem) {
      existingItem.number += number;

      if (existingItem.number <= 0) {
        user.basket = user.basket.filter(
          (item) => item.productId !== productId
        );
      }
    } else {
      if (number > 0) {
        user.basket.push({ productId, number });
      }
    }
    await user.save();
    return NextResponse.json({
      status: "success",
      message: "محصول به سبد خرید اضافه شد",
      data: user.basket,
    });
  } catch (err) {
    return NextResponse.json({
      status: "failed",
      message: err.message,
    });
  }
}
