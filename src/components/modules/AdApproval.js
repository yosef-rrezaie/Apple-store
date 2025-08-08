"use client";
import { sp } from "@/utils/replaceNumber";
import Image from "next/image";
import { useEffect } from "react";
import { FaStore } from "react-icons/fa";

function AdApproval() {
  useEffect(() => {
    async function getProducts() {
      const res = await fetch("/api/getProducts");
      const data = await res.json()
      console.log(data)
    }
    getProducts()
  }, []);
  return <div>
     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
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

          <div className="mt-4 flex justify-between">
            <button className="bg-orange-500 text-white px-3 py-1 rounded-md text-sm hover:bg-orange-600 transition">
                 تایید
            </button>
            <button className="bg-orange-500 text-white px-3 py-1 rounded-md text-sm hover:bg-orange-600 transition">
                 حذف
            </button>
          </div>
        </div>
      </div>
  </div>;
}

export default AdApproval;
