import Image from "next/image";
function Logo() {
  return (
    <div className="flex items-center gap-1 md:gap-5 text-primary font-semibold">
      <Image
        src="./svg/app-store.svg"
        width={32}
        height={32}
        alt="logo"
        className="md:w-13"
      />
      <p className="w-5 leading-4 text-base md:w-fit md:text-[30px] md:font-normal">
        اپل استور
      </p>
    </div>
  );
}

export default Logo;
