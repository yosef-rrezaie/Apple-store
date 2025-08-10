"use client";

import { sp } from "@/utils/replaceNumber";
import Image from "next/image";
import { Toaster } from "react-hot-toast";
import { FaStore } from "react-icons/fa";
import { useMemo } from "react";

function BasketPage({ informations }) {
  const { totalPrice, totalDiscount } = useMemo(() => {
    let totalPrice = 0;
    let totalDiscount = 0;

    informations.forEach((item) => {
      const price = item.price * item.number;
      const discountAmount =
        item.discount > 0
          ? (item.discount / 100) * item.price * item.number
          : 0;

      totalPrice += price - discountAmount;
      totalDiscount += discountAmount;
    });

    return { totalPrice, totalDiscount };
  }, [informations]);

  return (
    <div className="grid">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch px-6 py-8">
        {informations.map((information) => (
          <div
            key={information._id}
            className="flex flex-col h-full border bg-white shadow-md border-[#eb8d68] rounded-[13px] px-8 py-6"
          >
            <div className="flex justify-center mb-6">
              <Image
                src={information.imageUrl}
                width="1000"
                height="1000"
                className="rounded-xl shadow-md w-50 md:w-60"
                alt={information.title}
              />
            </div>

            <div className="text-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {information.title}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                دسته بندی : {information.category}
              </p>
            </div>

            <div className="mb-6 flex-1">
              <p className="text-[#FF510C] font-semibold mb-2">توضیحات:</p>
              <p className="text-justify text-gray-700 leading-relaxed font-medium">
                {information.description}
              </p>
            </div>

            <div className="flex items-center mb-4">
              <FaStore className="text-red-500 text-xl" />
              <p className="mr-2 font-semibold text-gray-800">
                فروشگاه دیجیتال‌پلاس
              </p>
            </div>

            <div className="mt-auto border-t border-gray-200 pt-4 flex flex-col">
              {information.discount === 0 ? (
                <p className="text-red-600 text-xl font-bold">
                  {sp(information.price)} تومان
                </p>
              ) : (
                <p className="text-red-600 text-xl font-bold">
                  {sp(
                    information.price -
                      (information.discount / 100) * information.price
                  )}{" "}
                  تومان
                </p>
              )}
              <div className="flex items-center gap-2 mt-1">
                {information.discount !== 0 && (
                  <>
                    <span className="text-sm text-white bg-red-500 px-2 py-0.5 rounded-full">
                      ٪{sp(information.discount)} تخفیف
                    </span>
                    <p className="line-through text-gray-400 text-sm">
                      {sp(information.price)} تومان
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
        <Toaster />
      </div>

      <div className="bg-gray-50 my-10 px-4 py-4 mx-8 rounded-xl shadow-inner">
        <div className="flex justify-between font-semibold border-b border-[#ccc5c5] pb-3 mb-5">
          <p>جمع کل :</p>
          <p>{sp(totalPrice)} تومان</p>
        </div>
        <div className="flex justify-between font-semibold mb-5">
          <p> تخفیف :</p>
          <p className="text-red-500">{sp(totalDiscount)} تومان</p>
        </div>
        <div className="flex justify-between font-semibold mb-5">
          <p> قابل پرداخت :</p>
          <p className="text-green-600">
            {sp(totalPrice - totalDiscount)} تومان
          </p>
        </div>
        <button
          className="bg-[#FF510C] hover:bg-orange-600 text-white px-5 py-2 rounded-xl flex items-center justify-center 
        transition-all w-full"
        >
          تکمیل سفارش
        </button>
      </div>
    </div>
  );
}

export default BasketPage;
