"use client";
import Image from "next/image";
import { FaShopify } from "react-icons/fa";

export default function BoughtProducts({ data }) {
  return (
    <div
      className={`gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ${
        data.boughtBasket.length ? "grid" : "block"
      }`}
    >
      {data.boughtBasket.length ? (
        data.boughtBasket.map((item) => (
          <div
            key={item.productId}
            className="bg-white shadow-lg rounded-2xl p-5 flex flex-col items-center hover:shadow-xl transition"
          >
            <div className="w-28 h-28 relative">
              <Image
                src={item.productImage}
                alt={item.productTitle}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <h3 className="text-gray-800 font-bold text-lg mt-3 text-center">
              {item.productTitle}
            </h3>

            <p className="text-sm text-gray-600 mt-1">
              تعداد خرید: <span className="font-medium">{item.number}</span>
            </p>

            <p className="text-xs text-gray-400 mt-2">
              تاریخ خرید:
              {new Date(item.boughtAt).toLocaleDateString("fa-IR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <span
              className={`mt-3 px-3 py-1 text-xs font-semibold rounded-full ${
                item.productTitle.includes("لپتاپ")
                  ? "bg-blue-100 text-blue-700"
                  : item.productTitle.includes("گوشی")
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {item.productTitle.includes("لپتاپ")
                ? "💻 لپتاپ"
                : item.productTitle.includes("گوشی")
                ? "📱 گوشی"
                : "📦 محصول"}
            </span>
          </div>
        ))
      ) : (
        <div className=" h-[300px] w-full flex flex-col gap-4  justify-center items-center">
          <p className=" text-center font-semibold">
              شما تا کنون خریدی انجام نداده اید    
          </p>
          <FaShopify  className="text-primary text-6xl" />
        </div>
      )}
    </div>
  );
}
