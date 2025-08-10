"use client";
import Image from "next/image";
import { GrAd } from "react-icons/gr";
import { LuShoppingCart } from "react-icons/lu";
import { FaStore } from "react-icons/fa";
import { sp } from "@/utils/replaceNumber";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import moment from "jalali-moment";

function ProductPage({ information }) {
  const [desc, setDesc] = useState("");
  const validation = useSession();
  const filteredComments = information.comments.filter(
    (item) => item.published === true
  );

  async function basketHandler(email, id, number ) {
    if (validation.status === "unauthenticated")
      return toast.error("ابتدا وارد حساب خود شوید");
    const res = await fetch("/api/basket", {
      method: "POST",
      body: JSON.stringify({
        email,
        productId:id,
        number
      }),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    console.log("result : " , result);
    if (result.status === "success") {
      toast.success(result.message);
    } else {
      toast.error("مشکل در سرور");
    }
  }

  async function clickHandler(id) {
    if (validation.status === "unauthenticated")
      return toast.error("ابتدا وارد حساب خود شوید");
    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        id: information._id,
        title: desc,
        email: validation.data?.user?.email,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    console.log(result);
    if (result.status === "success") {
      toast.success(result.message);
      setDesc("");
    } else {
      toast.error("مشکل در سرور");
    }
  }
  return (
    <div className="">
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
          <p className="mr-2 font-semibold text-gray-800">
            فروشگاه دیجیتال‌پلاس
          </p>
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
            onClick={() =>
              basketHandler(validation.data.user.email, information._id, 1)
            }
          >
            <LuShoppingCart className="text-white text-lg" />
            <span className="mr-2 font-medium">افزودن به سبد خرید</span>
          </button>
        </div>
      </div>

      {/* بخش نظرات کاربران */}
      <div className="bg-gray-50 my-10 p-4 mx-8 rounded-xl shadow-inner">
        <h3 className="text-orange-500 font-bold text-lg mb-4">
          نظرات کاربران
        </h3>

        {filteredComments.length ? (
          filteredComments.map((item) => (
            <div className="space-y-4 mb-6">
              <div className="border border-gray-200 rounded-lg p-3">
                <p className="text-gray-800 font-medium">{item.name}</p>
                <p className="text-sm text-gray-600 mt-1">{item.title}</p>
                <p className="text-xs text-gray-400 mt-2">
                  {moment(item.createdAt).locale("fa").format("YYYY/MM/DD")}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="my-4 flex flex-col justify-center items-center text-center">
            <p className="font-semibold">تاکنون نظری ثبت نشده است</p>
            <p>شما اولین نفری باشید که نظر خود را ثبت کنید</p>
          </div>
        )}
        <form className="space-y-3">
          {/* <input
            type="text"
            placeholder="نام شما"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          /> */}
          <textarea
            rows="3"
            placeholder="نظر خود را بنویسید..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <button
            type="button"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg w-full md:w-auto transition"
            onClick={() => clickHandler(information._id)}
          >
            ارسال نظر
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
}

export default ProductPage;
