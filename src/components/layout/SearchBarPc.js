"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function SearchBarPc() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchBar, setSearchBar] = useState(searchParams.get("search") || "");
  function clickHandler() {
    const params = new URLSearchParams(searchParams.toString()); 
    params.set("search", searchBar);
    router.push(`/products?${params.toString()}`);
  }
  return (
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
          value={searchBar}
          onChange={(e) => setSearchBar(e.target.value)}
        />
        <Image
          src="/svg/search-normal.svg"
          width={20}
          height={20}
          alt="search"
          onClick={clickHandler}
        />
      </div>
    </div>
  );
}

export default SearchBarPc;
