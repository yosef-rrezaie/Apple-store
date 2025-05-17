import Image from "next/image";
import React from "react";

function AdBanner() {
  return (
    <div className="mt-23 sm:mt-37 px-6 w-full mb-13 lg:flex lg:gap-x-4 lg:justify-center">
      <div className="relative bg-gradient-to-l from-[#004FC6] to-[#5892ea] w-full h-[150px] rounded-[10px] lg:w-[730px] lg:h-[500px]">
        <Image
          src="/images/vision-pro.webp"
          width="178"
          height="187"
          alt="vision"
          className="absolute -top-13 left-0 xl:w-[380px] xl:h-[420px] xl:top-[40px] lg:top-[50px] lg:w-[300px] lg:h-[350px]"
        />
        <div className="flex flex-col pr-[13px] pt-[12px] justify-end lg:pt-[70px] lg:pr-[50px]">
          <Image
            src="/svg/apple-white.svg"
            width="128"
            height="25"
            alt="apple"
            className="xl:w-[345px] xl:h-[75px] lg:w-[240px] lg:h-[60px]"
          />
          <p className="text-[14px] text-white font-semibold mt-[11px] tracking-widest xs:text-[38px] lg:text-[25px]">
            تجربه دنیای متفاوت
          </p>
          <button
            className="bg-white text-[#115BCA] text-[14px] font-bold w-[130px] h-[30px] rounded-[30px] mt-[17px] 
          lg:w-[153px] lg:h-[43px] lg:text-base"
          >
            خرید کنید
          </button>
        </div>
      </div>
      <div className="relative bg-gradient-to-b from-[#9A5BFF] to-[#c8b6e3] w-full h-[150px] rounded-[10px]  lg:w-[490px] lg:h-[500px]">
        <Image
          src="/images/purple-iphone.webp"
          width="115"
          height="179"
          alt="iphone"
          className="absolute -top-13 left-5 object-cover w-[115px] h-[200px] xl:w-[255px] xl:h-[350px] lg:w-[200px] lg:h-[290px] 
          xl:top-[150px] lg:top-[210px]"
        />
        <div className="flex flex-col pr-[13px] pt-[12px] justify-end mt-[55px] lg:items-center">
          <p className="text-[18px] text-white font-black mt-[11px] tracking-widest xl:text-[38px] lg:text-[25px]">
            iphone 14 Pro Max
          </p>
          <p className="text-[14px] text-white font-semibold mt-[11px] tracking-widest lg:mt-[6px]">
            فروش ویژه به مدت محدود
          </p>
          <button className="bg-white text-[#5137F5] text-[14px] font-bold w-[130px] h-[30px] rounded-[30px] mt-[17px] lg:mt-[8px] ">
            خرید کنید
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdBanner;
