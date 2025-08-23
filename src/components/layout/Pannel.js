import { sp } from "@/utils/replaceNumber";
import Image from "next/image";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";

function Pannel({ role , basketNumber }) {
  return (
    <div className="flex gap-3 items-center">
      <Link href="/basket">
        <div className="relative">
          <Image
            src="/svg/shopping-cart.svg"
            width={1000}
            height={1000}
            alt="shop"
            className="w-7 h-7"
          />
          <span className="block w-4 h-4 rounded-full text-center text-[12px] bg-primary text-white absolute -top-1 -bottom-1">
            {sp(basketNumber)}
          </span>
        </div>
      </Link>
      <Link href="/dashboard">
        <FaRegUser className={`w-7 h-7 text-primary`} />
      </Link>
      <Link href="/admin">
        <RiAdminLine
          className={`w-7 h-7 text-primary  ${
            role === "Admin" ? "block" : "hidden"
          }`}
        />
      </Link>
    </div>
  );
}

export default Pannel;
