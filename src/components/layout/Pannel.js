import Image from "next/image";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";

function Pannel({ role }) {
  return (
    <div className="flex gap-3 items-center">
      <div className="relative">
        <Image
          src="/svg/shopping-cart.svg"
          width={1000}
          height={1000}
          alt="shop"
          className="w-6 h-6"
        />
        <span className="block w-3 h-3 rounded-full text-center text-[10px] bg-primary text-white absolute -top-1 -bottom-1">
          0
        </span>
      </div>
      <Link href="/dashboard">
        <FaRegUser className={`w-6 h-6 text-primary`} />
      </Link>
      <Link href="/admin">
        <RiAdminLine
          className={`w-6 h-6 text-primary  ${
            role === "Admin" ? "block" : "hidden"
          }`}
        />
      </Link>
    </div>
  );
}

export default Pannel;
