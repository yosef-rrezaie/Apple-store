import Image from "next/image";
import BestSellSlider from "./BestSellSlider";

function BestSellProducts() {
  return (
    <div className="px-6 mb-[80px]">
      <div className="flex justify-between">
        <p className="font-semibold text-[18px] lg:text-[30px]">پرفروشترین محصولات</p>
        <div className="flex justify-between items-center gap-x-2">
          <p className="text-[12px] font-normal lg:text-[30px]">مشاهده همه</p>
          <Image
            src="./svg/arrow--left.svg"
            width="12"
            height="13"
            alt="arrow-left"
            className="lg:w-[33px] lg:h-[27px]"
          />
        </div>
      </div>
      <BestSellSlider/>
    </div>
  );
}

export default BestSellProducts;
