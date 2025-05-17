import Image from "next/image";

function AdvertiseBanner() {
  return (
    <div className="px-6 m-auto lg:w-fit ">
      <div className="  bg-[#fafafa] mb-[80px] mt-[80px] min-h-[460px] lg:flex">
        <div className="flex justify-center">
          <Image
            src="/images/iphone-14.webp"
            width="303"
            height="258"
            alt="iphone14"
            className="rounded-2xl relative bottom-9 object-cover lg:w-[428px] lg:h-[428px] lg:bottom-0 lg:-right-14 lg:-top-10"
          />
        </div>
        <div className="flex flex-col px-3 gap-y-2 lg:px-13 lg:mt-[30px]">
          <p className="text-[20px] font-semibold lg:text-[37px]">
            خرید آیفون ۱۴ پرومکس ۵۱۲ گیگ
          </p>
          <div className="lg:flex lg:flex-row-reverse lg:justify-end lg:gap-x-3 lg:items-center">
            <p className="text-[20px] lg:text-[34px] font-bold text-primary">
              قیمت : ۶۰/۵۰۰/۰۰۰
            </p>
            <p className="text-base lg:text-[25px] font-normal text-[#000000] line-through">
              قیمت : ۶۲/۰۰۰/۰۰۰
            </p>
          </div>
          <div className="flex gap-x-1.5 lg:mb-[18px]">
            <span className="w-[17px] h-[17px] block rounded-full bg-[#A848DE]"></span>
            <span className="w-[17px] h-[17px] block rounded-full bg-[#ECECEC]"></span>
            <span className="w-[17px] h-[17px] block rounded-full bg-[#828282]"></span>
          </div>
          <p className="text-[12px] font-normal text-primary lg:text-[20px]">
            با گارانتی الماس پایتخت همانند گارانتی اپل
          </p>
          <div className="flex justify-between items-center mb-[10px] lg:mt-[15px] lg:justify-start lg:gap-x-1.5">
            <button className="text-white bg-primary text-[13px] font-bold w-[92px] h-[35px] rounded-[4px]">
              خرید کنید
            </button>
            <div className="text-white bg-[#e6a991] text-[13px] font-bold w-[26px] h-[29px] rounded-[4px] flex items-center justify-center">
              <Image
                src="/svg/arrow-left.svg"
                width="13"
                height="12"
                alt="iphone14"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvertiseBanner;
