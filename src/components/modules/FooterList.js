"use client";
import { useRef } from "react";
import Image from "next/image";

function FooterList({ name, item }) {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  function clickHandler() {
    console.log(ref2.current.classList.contains("hidden"));
    if (ref2.current.classList.contains("hidden")) {
      ref2.current.classList.add("block");
      ref2.current.classList.remove("hidden");
    } else {
      ref2.current.classList.remove("block");
      ref2.current.classList.add("hidden");
    }
  }
  return (
    <div className="">
      <div className="flex justify-between items-center mb-2">
        <p className="font-medium md:text-[18px]">{name}</p>
        <Image
          src="/svg/arrow-down.svg"
          width="1000"
          height="1000"
          className="w-4 h-4 md:hidden"
          ref={ref1}
          onClick={clickHandler}
        />
      </div>
      <div
        className=" hidden transition-all duration-700 ease-in-out mb-4 text-[14px] md:block md:text-[15px]"
        ref={ref2}
      >
        <ul>
          {item.map((items) => (
            <li key={items}>{items}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FooterList;
