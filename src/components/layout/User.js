import Image from "next/image";

function User() {
  return (
    <div className="flex gap-3">
      <div className="relative">
        <Image
          src="/svg/shopping-cart.svg"
          width={23}
          height={23}
          alt="shop"
        />
        <span className="block w-3 h-3 rounded-full text-center text-[10px] bg-primary text-white absolute -top-1 -bottom-1">
          0
        </span>
      </div>
      {/* <div className="relative">
        <Image src="/svg/heart.svg" width={23} height={23} alt="favorite" />
        <span className="block w-3 h-3 rounded-full text-center text-[10px] bg-primary text-white absolute -top-1 -bottom-1">
          0
        </span>
      </div> */}
    </div>
  );
}

export default User;
