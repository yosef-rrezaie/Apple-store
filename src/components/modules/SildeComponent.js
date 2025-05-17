import Image from "next/image";
import { sp } from "@/utils/replaceNumber";

export default function SildeComponent({ src, title, price }) {
  return (
    <div className="rounded-xl shadow-sm p-3 bg-[#F6F6F6] h-full ">
      <div className="flex justify-center">
        <Image
          src={`/images/${src}.png`}
          width="162"
          height="100"
          alt={src}
          className="w-[162px] h-[100px] object-contain lg:w-[266px] lg:h-[165px]"
        />
      </div>
      <p className="text-sm text-center mt-4 font-semibold line-clamp-2 h-[48px] lg:text-[18px]">
        {title}
      </p>
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="border-solid border-[1px] border-[#E4E4E4] my-2 w-[182px]"></div>
      </div>
      <p className="text-center font-normal text-gray-800 text-base mt-1 lg:text-[20px] ">
        {sp(price)}
      </p>
      <div className="flex justify-end mt-4">
        <Image src="/svg/plus.svg" width="24" height="24" alt="ipad" className="lg:w-[27px] lg:h-[27px]" />
      </div>
    </div>
  );
}
