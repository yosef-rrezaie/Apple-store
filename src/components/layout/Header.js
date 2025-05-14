import Image from "next/image";

function Header() {
  return (
    <header className="h-37 shadow-[0_0_20px_-5px_#0000001A] lg:shadow-none lg:border-[#E6E6E6] lg:border-[1px]">
      <div className="container mx-auto flex flex-col gap-6 px-6 py-6 sm:px-2 lg:py-8">
        <div className="flex items-center justify-between ">
          <span className="md:hidden">
            <Image
              src="./svg/hamburger.svg"
              width={16}
              height={12}
              alt="menu"
            />
          </span>
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
          <div className="hidden lg:flex gap-2">
            <button className="h-11 w-35 bg-primary rounded-full flex items-center justify-center gap-3">
              <div className="flex flex-col gap-1">
                <span className="block h-0.5 w-4 bg-white"></span>
                <span className="block h-0.5 w-4 bg-white"></span>
                <span className="block h-0.5 w-4 bg-white"></span>
              </div>
              <span className="text-white">محصولات</span>
            </button>
            <div className="w-90 flex justify-between bg-[#FBFBFB] py-2.5 px-4 rounded-full">
              <input
                id=""
                name=""
                placeholder="جستجو کنید"
                className="w-full bg-[#FBFBFB] placeholder:text-[#282828B2] placeholder:font-light focus:outline-none"
              />
              <Image
                src="./svg/search-normal.svg"
                width={20}
                height={20}
                alt="search"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="relative">
              <Image
                src="./svg/shopping-cart.svg"
                width={23}
                height={23}
                alt="shop"
              />
              <span className="block w-3 h-3 rounded-full text-center text-[10px] bg-primary text-white absolute -top-1 -bottom-1">
                0
              </span>
            </div>
            <div className="relative">
              <Image
                src="./svg/heart.svg"
                width={23}
                height={23}
                alt="favorite"
              />
              <span className="block w-3 h-3 rounded-full text-center text-[10px] bg-primary text-white absolute -top-1 -bottom-1">
                0
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex lg:hidden justify-between bg-[#F1F1F1] py-2.5 px-4 rounded-full">
          <input
            type="text"
            name=""
            id=""
            placeholder="جستجو کنید"
            className="placeholder:text-[#282828B2] placeholder:font-light focus:outline-none"
          />
          <Image
            src="./svg/search-normal.svg"
            width={20}
            height={20}
            alt="search"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
