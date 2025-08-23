import Header from "../components/layout/Header";
import AdBanner from "@/components/modules/AdBanner";
import AdvertiseBanner from "@/components/modules/AdvertiseBanner";
import AppleWatch from "@/components/modules/AppleWatch";
import Banner from "@/components/modules/Banner";
import BestSellProducts from "@/components/modules/BestSellProducts";
import Categories from "@/components/modules/Categories";
import CountDown from "@/components/modules/CountDown";
import Facilities from "@/components/modules/Facilities";
import Footer from "@/components/modules/Footer";
import { authOptions } from "@/utils/authOptions";
import { connectDB } from "@/utils/DB/connectDB";
import Ad from "@/utils/DB/modelAd";
import User from "@/utils/DB/modelUser";
import { getServerSession } from "next-auth";

async function Home() {
  const session = await getServerSession(authOptions);
  try {
    await connectDB();
    const ad = await Ad.find({ published: true });
    const appleWatches = await Ad.find({
      category: "اپل واچ",
      published: true,
    });
    let basketNumber = 0;
    if (session.user.email) {
      const user = await User.find({ email: session.user.email });
      const basket = user[0].basket;
      basket.forEach((item) => {
        basketNumber += item.number;
      });
    }
    return (
      <>
        {/* <div className="bg-primary h-13 md:h-[70px] md:text-base flex justify-center items-center text-[13px] font-semibold text-white">
          <p>تا ۷۰٪ تخفیف برای لوازم جانبی اورجینال آیفون</p>
        </div> */}
        {/* <Header basketNumber={basketNumber} /> */}
        <Categories />
        <Banner />
        <CountDown />
        <AdvertiseBanner />
        <BestSellProducts data={JSON.parse(JSON.stringify(ad))} />
        <AdBanner />
        <AppleWatch data={JSON.parse(JSON.stringify(appleWatches))} />
        <Facilities />
        <Footer />
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default Home;
