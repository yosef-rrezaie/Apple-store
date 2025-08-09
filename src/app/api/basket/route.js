import User from "@/components/layout/User";
import { connectDB } from "@/utils/DB/connectDB";

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
    } else {
      user.basket.push({ productId, number });
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
