import DashboardPage from "@/components/modules/DashboardPage";
import { connectDB } from "@/utils/DB/connectDB";
import Ad from "@/utils/DB/modelAd";
import User from "@/utils/DB/modelUser";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function Dashboard() {
  const session = await getServerSession();
  console.log(session);
  if (!session) {
    redirect("/signin");
  }
  try {
    await connectDB();
    const user = await User.findOne({ email: session.user.email }).lean();
    const productIds = user.comments.map((c) => c.ProductId);
    const products = await Ad.find({ _id: { $in: productIds } }).lean();
    const commentsWithProduct = user.comments.map((comment) => {
      const product = products.find(
        (p) => p._id.toString() === comment.ProductId.toString()
      );
      return {
        ...comment,
        productImage: product?.imageUrl ,
        productTitle: product?.title,
      };
    });

    const finalUser = {
      ...user,
      comments: commentsWithProduct,
    };

    return <DashboardPage userData={JSON.parse(JSON.stringify(finalUser))} />;
  } catch (err) {
    console.log(err);
  }
}

export default Dashboard;
