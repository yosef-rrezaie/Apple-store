import AdBanner from "@/components/modules/AdBanner";
import AdvertiseBanner from "@/components/modules/AdvertiseBanner";
import AppleWatch from "@/components/modules/AppleWatch";
import Banner from "@/components/modules/Banner";
import BestSellProducts from "@/components/modules/BestSellProducts";
import Categories from "@/components/modules/Categories";
import CountDown from "@/components/modules/CountDown";

function Home() {
  return (
    <>
      <Categories />
      <Banner />
      <CountDown />
      <AdvertiseBanner />
      <BestSellProducts />
      <AdBanner />
      <AppleWatch />
    </>
  );
}

export default Home;
