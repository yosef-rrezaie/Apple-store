import Image from "next/image";
function Hamburger() {
  return (
    <span className="md:hidden">
      <Image src="./svg/hamburger.svg" width={16} height={12} alt="menu" />
    </span>
  );
}

export default Hamburger;
