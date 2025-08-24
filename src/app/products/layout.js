import Header from "@/components/layout/Header";
import React from "react";

function layout({ children }) {
  return (
    <div className="h-screen w-full flex flex-col">
      <div className="">
      </div>
      {/* <Header /> */}
      <main className="flex-1">{children}</main>
    </div>
  );
}

export default layout;
