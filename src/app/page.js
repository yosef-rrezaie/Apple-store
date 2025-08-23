import AdBanner from "@/components/modules/AdBanner";
import AdvertiseBanner from "@/components/modules/AdvertiseBanner";
import AppleWatch from "@/components/modules/AppleWatch";
import Banner from "@/components/modules/Banner";
import BestSellProducts from "@/components/modules/BestSellProducts";
import Categories from "@/components/modules/Categories";
import CountDown from "@/components/modules/CountDown";
import Facilities from "@/components/modules/Facilities";
import Footer from "@/components/modules/Footer";
import { connectDB } from "@/utils/DB/connectDB";
import Ad from "@/utils/DB/modelAd";

async function Home() {
  try {
    await connectDB();
    const ad = await Ad.find({ published: true });
    const appleWatches = await Ad.find({
      category: "اپل واچ",
      published: true,
    });

    return (
      <>
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
