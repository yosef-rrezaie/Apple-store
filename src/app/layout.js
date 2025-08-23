import { Toaster } from "react-hot-toast";
import Header from "../components/layout/Header";
import "./globals.css";
import { getServerSession } from "next-auth";
import { connectDB } from "@/utils/DB/connectDB";
import User from "@/utils/DB/modelUser";
import { authOptions } from "@/utils/authOptions";
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Mobile Store",
  description: "Mobile store",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  let basketNumber = 0;
  try {
    await connectDB();
    if (session?.user?.email) {
      const user = await User.findOne({ email: session.user.email });
      if (user?.basket) {
        user.basket.forEach((item) => {
          basketNumber += item.number;
        });
      }
    }
  } catch (err) {
    console.log(err);
  }
  return (
    <html lang="fa" dir="rtl">
      <body className="font-sans">
        <div className="bg-primary h-13 md:h-[70px] md:text-base flex justify-center items-center text-[13px] font-semibold text-white">
          <p>تا ۷۰٪ تخفیف برای لوازم جانبی اورجینال آیفون</p>
        </div>
        <Header basketNumber={basketNumber} />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
