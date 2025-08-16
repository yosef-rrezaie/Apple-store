"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

function CategoriesComponent({ title, img }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  function clickHandler(title) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", title.trim());
    router.push(`/products?${params.toString()}`);
  }
  return (
    <div
      className="w-[76px] h-[80px] bg-[#FAFAFA] rounded-[8px] flex flex-col justify-center items-center gap-3"
      onClick={()=>clickHandler(title)}
    >
      <Image
        src={`./svg/${img}.svg`}
        width={33}
        height={33}
        alt={title}
        className="lg:w-[44px] lg:h-[44px]"
      />
      <p
        className={`text-[12px] font-semibold text-[#747474] ${
          title === "ایرپاد" && "text-primary"
        } lg:text-base`}
      >
        {title}
      </p>
    </div>
  );
}

export default CategoriesComponent;
