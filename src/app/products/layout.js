"use client"
import Header from "@/components/layout/Header";
import { SessionProvider } from "next-auth/react";
import React from "react";

function layout({ children }) {
  return (
    <>
      <div className="bg-primary h-13 md:h-[70px] md:text-base flex justify-center items-center text-[13px] font-semibold text-white">
        <p>تا ۷۰٪ تخفیف برای لوازم جانبی اورجینال آیفون</p>
      </div>
      <Header />
      <SessionProvider>{children}</SessionProvider>
    </>
  );
}

export default layout;
