import Image from "next/image";

function SearchBarMobile() {
  return (
    <>
      <input
        type="text"
        name=""
        id=""
        placeholder="جستجو کنید"
        className="placeholder:text-[#282828B2] placeholder:font-light focus:outline-none"
      />
      <Image
        src="/svg/search-normal.svg"
        width={20}
        height={20}
        alt="search"
      />
    </>
  );
}

export default SearchBarMobile;
