import Image from "next/image";
import BestSellSlider from "./BestSellSlider";

function AppleWatch() {
  return (
    <div className="my-10 px-6 w-full">
      <p className="font-semibold tracking-wide lg:text-[30px]">انواع اپل واچ</p>
      <div className="mt-4 flex gap-x-4 overflow-hidden">
        <div className="w-[150px] lg:w-[435px] shrink-0">
          <div className="bg-primary  h-[270px] lg:h-[345px]  rounded-[10px] flex items-center justify-center">
            <Image
              src="/images/nike-watch2.webp"
              width="100"
              height="140"
              alt="nike-watch"
              className="object-contain lg:w-[200px] lg:h-[250px]"
            />
          </div>
          <div className="">
            <button className="bg-[#f0d4bdaa] w-full h-[52px] mt-2 rounded-[10px] flex flex-row-reverse items-center justify-evenly lg:w-[300px]">
              <Image
                src="/svg/arrow-orange.svg"
                width="18"
                height="15"
                alt="arrow-left"
                className="object-contain lg:w-[38px] lg:h-[25px]"
              />
              <span className="text-[14px] font-semibold tracking-wide text-primary lg:text-[25px]">
                مشاهده همه
              </span>
            </button>
          </div>
        </div>
        <BestSellSlider title="apple-watch" desc="watchProducts" />
      </div>
    </div>
  );
}

export default AppleWatch;
