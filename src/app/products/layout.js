import Header from "@/components/layout/Header";
import React from "react";

function layout({ children }) {
  return (
    <div className="h-screen w-full flex flex-col">
      <div className="bg-primary h-13 md:h-[70px] flex justify-center items-center text-[13px] md:text-base font-semibold text-white">
      </div>
      {/* <Header /> */}
      <main className="flex-1">{children}</main>
    </div>
  );
}

export default layout;
