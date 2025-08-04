import Image from "next/image";
import { GrAd } from "react-icons/gr";
import { LuShoppingCart } from "react-icons/lu";
import { FaStore } from "react-icons/fa";
import { sp } from "@/utils/replaceNumber";

async function ProductPage(req) {
  return (
    <div className="border bg-white shadow-md border-[#eb8d68] mx-6 mt-10 rounded-[13px] px-8 py-6 ">
      <div className="flex justify-center mb-6 ">
        <Image
          src="/images/apple-watch.webp"
          width="1000"
          height="1000"
          className="rounded-xl shadow-md w-50 md:w-60"
          alt=" appleWatch"
        />
      </div>

      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          سامسونگ گلکسی S25 اولترا
        </h2>
        <p className="text-sm text-gray-500 mt-1">دسته‌بندی: گوشی هوشمند</p>
      </div>

      <div className="bg-gray-50 border border-dashed border-orange-200 p-4 rounded-xl mb-5">
        <p className="text-[#FF510C] font-semibold mb-3">ویژگی‌ها:</p>
        <div className="space-y-3">
          <div className="flex items-center">
            <GrAd className="text-orange-500 text-lg" />
            <p className="mr-2 font-medium">
              باتری 5000 میلی آمپر با شارژ سریع
            </p>
          </div>
          <div className="flex items-center">
            <GrAd className="text-orange-500 text-lg" />
            <p className="mr-2 font-medium">دوربین اصلی 108 مگاپیکسل</p>
          </div>
          <div className="flex items-center">
            <GrAd className="text-orange-500 text-lg" />
            <p className="mr-2 font-medium">نمایشگر AMOLED با نرخ 120Hz</p>
          </div>
          <div className="flex items-center">
            <GrAd className="text-orange-500 text-lg" />
            <p className="mr-2 font-medium">ضد آب + بدنه گوریلا گلس</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-[#FF510C] font-semibold mb-2">توضیحات:</p>
        <p className="text-justify text-gray-700 leading-relaxed font-medium">
          گلکسی S25 اولترا یکی از پرچم‌داران سامسونگ در سال جدید است که با طراحی
          مدرن، عملکرد فوق‌العاده، و ویژگی‌های پیشرفته به بازار عرضه شده. این
          گوشی مناسب گیمرها، عکاسان موبایلی و کاربران حرفه‌ای است.
        </p>
      </div>

      <div className="flex items-center mb-4">
        <FaStore className="text-red-500 text-xl" />
        <p className="mr-2 font-semibold text-gray-800">فروشگاه دیجیتال‌پلاس</p>
      </div>

      <div className="flex flex-col md:flex-row-reverse md:items-center items-end justify-between mb-6 border-t border-gray-200 pt-4">
        <div className=" flex flex-col items-end mb-8 md:mb-13">
          <p className="text-red-600 text-xl font-bold">{sp(42900000)} تومان</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm text-white bg-red-500 px-2 py-0.5 rounded-full">
              ٪{sp(15)} تخفیف
            </span>
            <p className="line-through text-gray-400 text-sm">
              {sp(50500000)} تومان
            </p>
          </div>
        </div>
        <button className="bg-[#FF510C] hover:bg-orange-600 text-white px-5 py-2 rounded-xl flex items-center justify-center 
        transition-all w-full md:w-max">
          <LuShoppingCart className="text-white text-lg" />
          <span className="mr-2 font-medium">افزودن به سبد خرید</span>
        </button>
      </div>
    </div>
  );
}

export default ProductPage;
