import Image from "next/image";
import React from "react";

function FacilitiesCard({ icon, name }) {
  return (
    <div className="flex flex-col gap-y-2.5 bg-[#FAFAFA] rounded-[18px] justify-center items-center py-4 
    md:flex-row md:justify-center md:items-center md:rounded-none md:border-l border-l-[#EBEBEB] md:py-7">
      <Image
        src={icon}
        width={1000}
        height={1000}
        className="w-[24px] h-[24px]"
        alt={name}
      />
      <p className="text-[14px] font-normal md:pr-2 lg:text-[18px]">{name}</p>
    </div>
  );
}

export default FacilitiesCard;
