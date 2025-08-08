"use client";
import { sp } from "@/utils/replaceNumber";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaStore } from "react-icons/fa";
import useSWR from "swr";

function AdApproval() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading, mutate } = useSWR(
    "/api/getProductsDetails",
    fetcher
  );
  console.log(data);

  async function approvalHandler(id) {
    const res = await fetch("/api/getProductsDetails", {
      method: "POST",
      body: JSON.stringify({ id }),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    console.log(result);
    mutate();
  }
  async function deleteHandler(id) {
    const res = await fetch("/api/getProductsDetails", {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    console.log(result);
    mutate();
  }
  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div
          className="w-7 h-7 md:w-9 md:h-9 border-2 border-black border-t-transparent rounded-full animate-spin"
        ></div>
      </div>
    );
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
      {data.data.map((item) => (
        <div
          key={item._id}
          className="bg-[#F6F6F6] rounded-[10px] p-4 shadow-sm hover:shadow-md transition"
        >
          <div className="flex justify-center">
            <Image
              src={item.imageUrl}
              width={300}
              height={200}
              className="w-full max-h-40 object-contain"
              alt={item.title}
            />
          </div>
          <p className="text-center font-semibold mt-2"> {item.title}</p>

          <div className="mt-2 border-t border-gray-200"></div>

          <p className="text-center text-red-600 text-lg font-bold mt-3">
            {sp(item.price)} تومان
          </p>

          <div className="mt-4 flex items-center">
            <FaStore className="text-red-500 text-xl" />
            <p className="mr-2 font-medium text-gray-700">
              {item.PublisherName}
            </p>
          </div>

          <div className="mt-4 flex justify-between">
            <button
              className="bg-orange-500 text-white px-3 py-1 rounded-md text-sm hover:bg-orange-600 transition"
              onClick={() => approvalHandler(item._id)}
            >
              تایید
            </button>
            <button
              className="bg-orange-500 text-white px-3 py-1 rounded-md text-sm hover:bg-orange-600 transition"
              onClick={() => deleteHandler(item._id)}
            >
              حذف
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdApproval;
