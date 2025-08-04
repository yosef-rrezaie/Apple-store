import Image from "next/image";
import { GrAd } from "react-icons/gr";
import { FaCartShopping } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { FaStore } from "react-icons/fa";

import { sp } from "@/utils/replaceNumber";

async function ProductPage(req) {
  const x = await req.params;
  console.log(x);
  return (
    <div className=" border bg-white shadow border-[#eb8d68] mx-6 mt-10 rounded-[13px] px-6 py-5">
      <div className="flex justify-center relative">
        <Image
          src="/images/apple-watch.webp"
          width="1000"
          height="1000"
          className="w-40 h-40"
        />
      </div>
      <div className="flex mt-3">
        <p className="text-[#FF510C]">نام کالا : </p>
        <p className="mr-2 font-medium">اپل واچ سری Z</p>
      </div>
      <div className="flex mt-3">
        <p className="text-[#FF510C]"> دسته کالا : </p>
        <p className="mr-2 font-medium">اپل واچ</p>
      </div>
      <div className="mt-3">
        <p className="text-[#FF510C]">ویژگی های کالا : </p>
        <div className="flex mt-3">
          <GrAd className="" />
          <p className="mr-2 font-medium">قابلیت شارژ دهی در 3 ساعت</p>
        </div>
        <div className="flex mt-3">
          <GrAd className="" />
          <p className="mr-2 font-medium">ضد آب و مقاومت در برابر ضربه</p>
        </div>
        <div className="flex mt-3">
          <GrAd className="" />
          <p className="mr-2 font-medium">قابلیت اتصال به اینترنت</p>
        </div>
      </div>
      <div className="flex mt-3 flex-col">
        <p className="text-[#FF510C]"> توضیحات : </p>
        <p className="font-medium mt-3 text-justify">
          این اپل واچ ساخت کشور تایوان است و در حال حاضر تنها نسخه سری Z تولید
          می شود و ساخت بقیه نسخه ها متوقف شده است
        </p>
      </div>
      <div className="mt-3 flex">
        <FaStore className="text-red-500" />
        <p className="mr-2 font-medium">فروشگاه شایان</p>
      </div>
      <div className="mt-3 flex justify-between ">
        <p className="text-[#FF510C]">قیمت : </p>
        <div className="flex flex-col items-baseline text-[17px] ">
          <p className="text-red-700 font-semibold">{sp(55000000)}</p>
          <div className="flex flex-row gap-x-2 justify-between items-center">
            <p>{sp(23)}%</p>
            <p className="line-through">{sp(56000000)}</p>
          </div>
        </div>
      </div>
      <div className="bg-[#FF510C] rounded-2xl p-2 mt-4 flex justify-center items-center">
        <button className="flex text-white font-medium items-center justify-center ">
          <LuShoppingCart className="text-[17px]" />
          <p className="mr-2">اضافه کردن به سبد خرید</p>
        </button>
      </div>
    </div>
  );
}

export default ProductPage;
