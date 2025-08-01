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

function Home() {
  return (
    <>
      <div className="bg-primary h-13 md:h-[70px] md:text-base flex justify-center items-center text-[13px] font-semibold text-white">
        <p>تا ۷۰٪ تخفیف برای لوازم جانبی اورجینال آیفون</p>
      </div>
      <Header />
      <Categories />
      <Banner />
      <CountDown />
      <AdvertiseBanner />
      <BestSellProducts />
      <AdBanner />
      <AppleWatch />
      <Facilities />
      <Footer />
    </>
  );
}

export default Home;
