import Image from "next/image";
import BestSellSlider from "./BestSellSlider";
import Link from "next/link";

function BestSellProducts({ data }) {
  return (
    <div className="px-6">
      <div className="flex justify-between">
        <p className="font-semibold text-[18px] lg:text-[30px]">
          پرفروشترین محصولات
        </p>
        <Link href="/products">
          <div className="flex justify-between items-center gap-x-2 cursor-pointer">
            <p className="text-[12px] font-normal lg:text-[30px]">مشاهده همه</p>
            <Image
              src="./svg/arrow--left.svg"
              width="12"
              height="13"
              alt="arrow-left"
              className="lg:w-[33px] lg:h-[27px]"
            />
          </div>
        </Link>
      </div>
      <BestSellSlider title="sellProducts" desc="allProducts" data={data} />
    </div>
  );
}

export default BestSellProducts;
