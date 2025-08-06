import { sp } from "@/utils/replaceNumber";
import Image from "next/image";
import { FaStore } from "react-icons/fa";

function Products() {
  return (
    <div className="mt-6 px-6 ">
      <div className=" mt-4 space-y-4">
        <div className="flex items-center justify-between">
          <label htmlFor="sort" className="text-[14px] md:text-[16px] font-medium text-gray-700">
            مرتب‌سازی:
          </label>
          <select
            id="sort"
            className="border border-primary text-sm rounded-md p-1 focus:outline-none focus:ring-1 focus:ring-orange-500"
          >
            <option value="bestselling">پرفروش‌ترین</option>
            <option value="cheapest">ارزان‌ترین</option>
            <option value="expensive">گران‌ترین</option>
            <option value="latest">جدیدترین</option>
          </select>
        </div>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-3 w-max">
            {[
              "همه",
              "اپل واچ",
              "ایرپاد",
              "آیپد",
              "آیفون",
              "شارژر",
              "هوم پاد",
              "اپل تی وی",
            ].map((category) => (
              <button
                key={category}
                className="whitespace-nowrap border border-gray-300 px-3 py-1 md:px-4 lg:px-5 text-sm rounded-full hover:bg-orange-100 hover:border-orange-400 transition"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* products */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4">
        <div className="bg-[#F6F6F6] rounded-[10px] p-4 shadow-sm hover:shadow-md transition">
          <div className="flex justify-center">
            <Image
              src="/images/pc-laptop.png"
              width={300}
              height={200}
              className="w-full max-h-40 object-contain"
              alt="لپتاپ"
            />
          </div>
          <p className="text-center font-semibold mt-2">لپتاب 13 اینچی ایسوز</p>

          <div className="mt-2 border-t border-gray-200"></div>

          <p className="text-center text-red-600 text-lg font-bold mt-3">
            {sp(75000000)} تومان
          </p>

          <div className="mt-4 flex items-center">
            <FaStore className="text-red-500 text-xl" />
            <p className="mr-2 font-medium text-gray-700">
              فروشگاه دیجیتال‌پلاس
            </p>
          </div>

          <div className="mt-4 flex justify-end">
            <button className="bg-orange-500 text-white px-3 py-1 rounded-md text-sm hover:bg-orange-600 transition">
              افزودن به سبد خرید
            </button>
          </div>
        </div>
        <div className="bg-[#F6F6F6] rounded-[10px] p-4 shadow-sm hover:shadow-md transition">
          <div className="flex justify-center">
            <Image
              src="/images/airpadmax.png"
              width={300}
              height={200}
              className="w-full max-h-40 object-contain"
              alt="لپتاپ"
            />
          </div>
          <p className="text-center font-semibold mt-2">لپتاب 13 اینچی ایسوز</p>

          <div className="mt-2 border-t border-gray-200"></div>

          <p className="text-center text-red-600 text-lg font-bold mt-3">
            {sp(75000000)} تومان
          </p>

          <div className="mt-4 flex items-center">
            <FaStore className="text-red-500 text-xl" />
            <p className="mr-2 font-medium text-gray-700">
              فروشگاه دیجیتال‌پلاس
            </p>
          </div>

          <div className="mt-4 flex justify-end">
            <button className="bg-orange-500 text-white px-3 py-1 rounded-md text-sm hover:bg-orange-600 transition">
              افزودن به سبد خرید
            </button>
          </div>
        </div>
        <div className="bg-[#F6F6F6] rounded-[10px] p-4 shadow-sm hover:shadow-md transition">
          <div className="flex justify-center">
            <Image
              src="/images/pc-laptop.png"
              width={300}
              height={200}
              className="w-full max-h-40 object-contain"
              alt="لپتاپ"
            />
          </div>
          <p className="text-center font-semibold mt-2">لپتاب 13 اینچی ایسوز</p>

          <div className="mt-2 border-t border-gray-200"></div>

          <p className="text-center text-red-600 text-lg font-bold mt-3">
            {sp(75000000)} تومان
          </p>

          <div className="mt-4 flex items-center">
            <FaStore className="text-red-500 text-xl" />
            <p className="mr-2 font-medium text-gray-700">
              فروشگاه دیجیتال‌پلاس
            </p>
          </div>

          <div className="mt-4 flex justify-end">
            <button className="bg-orange-500 text-white px-3 py-1 rounded-md text-sm hover:bg-orange-600 transition">
              افزودن به سبد خرید
            </button>
          </div>
        </div>
        <div className="bg-[#F6F6F6] rounded-[10px] p-4 shadow-sm hover:shadow-md transition">
          <div className="flex justify-center">
            <Image
              src="/images/pc-laptop.png"
              width={300}
              height={200}
              className="w-full max-h-40 object-contain"
              alt="لپتاپ"
            />
          </div>
          <p className="text-center font-semibold mt-2">لپتاب 13 اینچی ایسوز</p>

          <div className="mt-2 border-t border-gray-200"></div>

          <p className="text-center text-red-600 text-lg font-bold mt-3">
            {sp(75000000)} تومان
          </p>

          <div className="mt-4 flex items-center">
            <FaStore className="text-red-500 text-xl" />
            <p className="mr-2 font-medium text-gray-700">
              فروشگاه دیجیتال‌پلاس
            </p>
          </div>

          <div className="mt-4 flex justify-end">
            <button className="bg-orange-500 text-white px-3 py-1 rounded-md text-sm hover:bg-orange-600 transition">
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
