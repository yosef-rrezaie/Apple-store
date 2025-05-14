import AdvertiseBanner from "@/components/modules/AdvertiseBanner";
import Banner from "@/components/modules/Banner";
import Categories from "@/components/modules/Categories";
import CountDown from "@/components/modules/CountDown";

function Home() {
  return (
    <>
      <Categories />
      <Banner />
      <CountDown />
      <AdvertiseBanner />
    </>
  );
}

export default Home;
