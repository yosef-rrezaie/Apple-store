"use client";
import Image from "next/image";
import { GrAd } from "react-icons/gr";
import { LuShoppingCart } from "react-icons/lu";
import { FaStore } from "react-icons/fa";
import { sp } from "@/utils/replaceNumber";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

function ProductPage({ information }) {
  return (
    <div className="border bg-white shadow-md border-[#eb8d68] mx-6 mt-10 rounded-[13px] px-8 py-6 ">
      <div className="flex justify-center mb-6 ">
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

      <div className="bg-gray-50 border border-dashed border-orange-200 p-4 rounded-xl mb-5">
        <p className="text-[#FF510C] font-semibold mb-3">ویژگی‌ها:</p>
        <div className="space-y-3">
          {JSON.parse(information.features).map((item) => (
            <div className="flex items-center" key={item.id}>
              <GrAd className="text-orange-500 text-lg" />
              <p className="mr-2 font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <p className="text-[#FF510C] font-semibold mb-2">توضیحات:</p>
        <p className="text-justify text-gray-700 leading-relaxed font-medium">
          {information.description}
        </p>
      </div>

      <div className="flex items-center mb-4">
        <FaStore className="text-red-500 text-xl" />
        <p className="mr-2 font-semibold text-gray-800">فروشگاه دیجیتال‌پلاس</p>
      </div>

      <div className="flex flex-col md:flex-row-reverse md:items-center items-end justify-between mb-6 border-t border-gray-200 pt-4">
        <div className=" flex flex-col items-end mb-8 md:mb-13">
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
            {information.discount === 0 ? null : (
              <span className="text-sm text-white bg-red-500 px-2 py-0.5 rounded-full">
                ٪{sp(information.discount)} تخفیف
              </span>
            )}
            <p
              className={`line-through text-gray-400 text-sm ${
                information.discount === 0 && "hidden"
              }`}
            >
              {sp(information.price)} تومان
            </p>
          </div>
        </div>
        <button
          className="bg-[#FF510C] hover:bg-orange-600 text-white px-5 py-2 rounded-xl flex items-center justify-center 
        transition-all w-full md:w-max"
        >
          <LuShoppingCart className="text-white text-lg" />
          <span className="mr-2 font-medium">افزودن به سبد خرید</span>
        </button>
      </div>
    </div>
  );
}

export default ProductPage;
