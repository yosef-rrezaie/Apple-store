import Image from "next/image";
import Link from "next/link";

function NoPannel() {
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
      <Link href="/signin">
        <div className="py-2 px-7 bg-primary text-white font-semibold rounded-[10px] mr-3">
          ورود
        </div>
      </Link>
    </div>
  );
}

export default NoPannel;
