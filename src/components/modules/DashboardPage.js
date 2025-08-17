"use client";

import { useState } from "react";
import { FaHome, FaProductHunt, FaCommentAlt } from "react-icons/fa";
import { FiLogOut, FiMenu } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import AccountUser from "./AccountUser";
import CommentUser from "./CommentUser";
import BoughtProducts from "./BoughtProducts";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DashboardPage({ userData }) {
  const [open, setOpen] = useState(false);
  const [situation, setSituation] = useState("account");
  const router = useRouter();
  const toggleMenu = () => setOpen(!open);
  console.log(userData);
  function logOutHandler() {
    signOut({ callbackUrl: "/signin" });
  }
  return (
    <div className=" md:flex gap-7 py-6 px-45">
      <div>
        <div className="md:hidden flex p-4">
          <button
            onClick={toggleMenu}
            className="flex items-center flex-row-reverse gap-1 px-3 py-2 rounded-md border shadow-sm bg-primary text-white font-semibold border-primary"
          >
            <span className="text-[14px]">منوی حساب کاربری</span>
            <BsThreeDotsVertical className="w-5 h-5" />
          </button>
        </div>
        {open && (
          <div className="md:hidden absolute right-4 mt-2 w-56 border-primary bg-white rounded-xl shadow-lg border py-2 z-50">
            <div
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition"
              onClick={() => setSituation("account")}
            >
              <FaHome className="w-5 h-5" />
              <span>حساب کاربری</span>
            </div>
            <div
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition"
              onClick={() => setSituation("boughtProducts")}
            >
              <FaProductHunt className="w-5 h-5" />
              <span>محصولات خریداری شده</span>
            </div>
            <div
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition"
              onClick={() => setSituation("comments")}
            >
              <FaCommentAlt className="w-5 h-5" />
              <span>نظرات ثبت شده</span>
            </div>

            <button
              className="flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 w-full text-right"
              onClick={logOutHandler}
            >
              <FiLogOut className="w-5 h-5" />
              <span>خروج</span>
            </button>
          </div>
        )}

        <div className="hidden md:block w-64 bg-white rounded-2xl shadow-md px-6 py-12">
          <div className="flex flex-col items-center">
            <h2 className="mt-3 font-semibold text-lg">یوسف رضایی</h2>
            <p className="text-sm text-gray-500">yosefrezaie5001@gmail.com</p>
          </div>

          <div className="mt-6 flex flex-col gap-4">
            <div
              className="flex items-center gap-3 hover:text-primary"
              onClick={() => setSituation("account")}
            >
              <FaHome className="w-5 h-5" />
              حساب کاربری
            </div>
            <div
              className="flex items-center gap-3 hover:text-primary"
              onClick={() => setSituation("boughtProducts")}
            >
              <FaProductHunt className="w-5 h-5" />
              محصولات خریداری شده
            </div>
            <div
              className="flex items-center gap-3 hover:text-primary"
              onClick={() => setSituation("comments")}
            >
              <FaCommentAlt className="w-5 h-5" />
              نظرات ثبت شده
            </div>

            <button
              className="flex items-center gap-3 text-red-600 hover:text-red-700"
              onClick={logOutHandler}
            >
              <FiLogOut className="w-5 h-5" />
              خروج
            </button>
          </div>
        </div>
      </div>
      <div
        className={`mt-7 w-full md:mt-0 bg-white rounded-2xl  ${
          situation === "comments" ? "shadow-none" : "shadow-md"
        } ${situation === "boughtProducts" ? "shadow-none" : "shadow-md"}`}
      >
        {situation === "account" && <AccountUser data={userData} />}
        {situation === "comments" && <CommentUser data={userData} />}
        {situation === "boughtProducts" && <BoughtProducts data={userData} />}
      </div>
    </div>
  );
}
