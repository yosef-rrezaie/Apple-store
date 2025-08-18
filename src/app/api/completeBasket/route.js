import { connectDB } from "@/utils/DB/connectDB";
import User from "@/utils/DB/modelUser";
import Ad from "@/utils/DB/modelAd";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { email } = body;

    const user = await User.findOne({ email });
    if (!user) {
      return new Response(
        JSON.stringify({ message: "کاربر پیدا نشد" }),
        { status: 404 }
      );
    }

    const itemsToAdd = await Promise.all(
      user.basket.map(async (item) => {
        const product = await Ad.findById(item.productId).lean();
        return {
          productId: item.productId,
          number: item.number,
          productTitle: product?.title || "بدون عنوان",
          productImage: product?.imageUrl || "",
          boughtAt: new Date(),
        };
      })
    );

    user.boughtBasket = user.boughtBasket || [];
    user.boughtBasket.push(...itemsToAdd);
    user.basket = [];
    await user.save();

    return new Response(
      JSON.stringify({
        message: "خرید با موفقیت انجام شد",
        boughtBasket: user.boughtBasket,
        basket: user.basket,
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ message: "خطای سرور", error: err.message }),
      { status: 500 }
    );
  }
}
