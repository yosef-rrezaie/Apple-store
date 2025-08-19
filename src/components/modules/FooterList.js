"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";


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
    <div className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <p className="font-medium md:text-[18px]">{name}</p>
        <Image
          src="/svg/arrow-down.svg"
          width="1000"
          height="1000"
          className="w-4 h-4 md:hidden"
          alt="arrow-down"
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
            <Link href={items.link}>
              <li key={items.id}>{items.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FooterList;
