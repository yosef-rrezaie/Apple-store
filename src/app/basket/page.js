import BasketPage from "@/components/modules/BasketPage";
import { authOptions } from "@/utils/authOptions";
import { connectDB } from "@/utils/DB/connectDB";
import Ad from "@/utils/DB/modelAd";
import User from "@/utils/DB/modelUser";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function Basket() {
  const session = await getServerSession(authOptions);
  if (session === null) {
    redirect("/");
  }
  try {
    await connectDB();
    const user = await User.findOne({ email : session.user.email });
    const basketWithDetails = [];

    for (const item of user.basket) {
      const product = await Ad.findById(item.productId).lean();
      if (product) {
        basketWithDetails.push({
          ...product,
          number: item.number,
        });
      }
    }
    const safeData = JSON.parse(JSON.stringify(basketWithDetails));
    return <BasketPage informations={safeData} email={session.user.email} />;
  } catch (err) {
    console.log("erorr");
  }
}

export default Basket;
