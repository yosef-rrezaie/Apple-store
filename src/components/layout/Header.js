import Hamburger from "./Hamburger";
import Logo from "./Logo";
import SearchBarPc from "./SearchBarPc";
import SearchBarMobile from "./SearchBarMobile";
import UserInfo from "./UserInfo";

function Header() {
  return (
    <header className="h-37 shadow-[0_0_20px_-5px_#0000001A] lg:shadow-none lg:border-[#E6E6E6] lg:border-[1px]">
      <div className="mx-auto flex flex-col gap-6 px-6 py-6 sm:px-2 lg:py-8">
        <div className="flex items-center justify-between ">
          <Hamburger />
          <Logo />
          <SearchBarPc />
          <UserInfo />
        </div>
        <div className="w-full flex lg:hidden justify-between bg-[#F1F1F1] py-2.5 px-4 rounded-full">
          <SearchBarMobile />
        </div>
      </div>
    </header>
  );
}

export default Header;
