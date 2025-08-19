import Image from "next/image";
import Link from "next/link";

function Banner() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center max-md:gap-2 my-8">
        <Image
          src="./svg/apple-vision-pro.svg"
          width="100"
          height="24"
          alt="banner"
          className="lg:w-[280px]"
        />
        <p className="font-semibold">اولین نفری باشید که ویژن پرو می‌خرید</p>
        <Link href="/products">
          <button
            className="bg-primary w-24 h-8 text-sm rounded text-white 
      lg:h-9 lg:w-35 lg:rounded-lg md:mt-4 lg:shadow-[0_0_15px_3px_#ff510b66] "
          >
            خرید کنید
          </button>
        </Link>
      </div>
      <div className="relative flex items-center my-10 md:my-[16px] px-14">
        <Image
          src="/images/glasses.webp"
          width="324"
          height="127"
          alt="galsses"
          className="m-auto sm:w-[420px] sm:mt-[30px] lg:w-[600px] "
        />
      </div>
    </div>
  );
}

export default Banner;
