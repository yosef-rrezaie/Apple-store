"use client";
import Image from "next/image";
import { sp } from "@/utils/replaceNumber";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";

export default function SildeComponent({ src, title, price, discount, id }) {
  const session = useSession();
  console.log("session:", session);
  const finalPrice = discount
    ? Math.floor(price - (price * discount) / 100)
    : price;
  const router = useRouter();
  function clickHandler(id) {
    router.push(`/products/${id}`);
  }

  async function basketHandler( id, number) {
    if (session.status === "unauthenticated")
      return toast.error("ابتدا وارد حساب خود شوید");
    const res = await fetch("/api/basket", {  
      method: "POST",
      body: JSON.stringify({
        email:session.data.user.email ,
        productId: id,
        number,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    console.log("result : ", result);
    if (result.status === "success") {
      toast.success(result.message);
      router.refresh()
    } else {
      toast.error("مشکل در سرور");
    }
  }

  return (
    <div className="rounded-xl shadow-sm p-3 bg-[#F6F6F6] h-[500px]">
      <div className="flex justify-center">
        <Image
          src={src}
          width="162"
          height="100"
          alt={title}
          className="w-[162px] h-[100px] object-contain lg:w-[266px] lg:h-[165px]"
          onClick={() => clickHandler(id)}
        />
      </div>

      <p className="text-sm text-center mt-4 font-semibold line-clamp-2 h-[48px] lg:text-[18px]">
        {title}
      </p>

      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="border border-[#E4E4E4] my-2 w-[182px]"></div>
      </div>

      <div className="text-center font-normal text-gray-800 text-base mt-1 lg:text-[20px]">
        {!discount ? (
          <div className="flex flex-col items-center gap-1">
            <p className="text-gray-400  text-xs lg:text-[16px]">
              {sp(price)} تومان
            </p>
            <div className="flex items-center gap-2 invisible">
              <p className="text-red-600 font-bold">{sp(finalPrice)} تومان</p>
              <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                %{discount}
              </span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-1">
            <p className="text-gray-400 line-through text-sm lg:text-[16px]">
              {sp(price)} تومان
            </p>
            <div className="flex items-center gap-2">
              <p className="text-red-600 font-bold">{sp(finalPrice)} تومان</p>
              <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                %{sp(discount)}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-end mt-4">
        <Image
          src="/svg/plus.svg"
          width="24"
          height="24"
          alt="add"
          className="lg:w-[27px] lg:h-[27px] cursor-pointer"
          onClick={() => basketHandler( id, 1)}
        />
      </div>
    </div>
  );
}
