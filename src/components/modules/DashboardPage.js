"use client";
import { useState, useRef, useEffect } from "react";
import { FaHome, FaProductHunt, FaCommentAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
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

  const menuRef = useRef(null);

  const toggleMenu = () => setOpen(!open);

  function logOutHandler() {
    signOut({ callbackUrl: "/signin" });
  }

  // وقتی بیرون منو کلیک شد منو بسته میشه
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="md:flex gap-7 py-6 px-4 md:px-12 min-h-screen w-full">
      <div>
        {/* mobile button */}
        <div className="md:hidden flex p-2">
          <button
            onClick={toggleMenu}
            className="flex items-center flex-row-reverse gap-1 px-3 py-2 rounded-md border shadow-sm bg-primary text-white font-semibold border-primary"
          >
            <span className="text-[14px]">منوی حساب کاربری</span>
            <BsThreeDotsVertical className="w-5 h-5" />
          </button>
        </div>

        {/* mobile menu */}
        {open && (
          <div
            ref={menuRef}
            className="fixed top-0 right-0 w-64 h-screen bg-white/90 backdrop-blur-md shadow-lg border-l border-gray-200 z-50 p-4"
          >
            <div className="flex flex-col gap-4">
              <div
                className="flex items-center gap-3 px-2 py-2 hover:bg-gray-100 rounded-md transition"
                onClick={() => {
                  setSituation("account");
                  setOpen(false);
                }}
              >
                <FaHome className="w-5 h-5" />
                <span>حساب کاربری</span>
              </div>

              <div
                className="flex items-center gap-3 px-2 py-2 hover:bg-gray-100 rounded-md transition"
                onClick={() => {
                  setSituation("boughtProducts");
                  setOpen(false);
                }}
              >
                <FaProductHunt className="w-5 h-5" />
                <span>محصولات خریداری شده</span>
              </div>

              <div
                className="flex items-center gap-3 px-2 py-2 hover:bg-gray-100 rounded-md transition"
                onClick={() => {
                  setSituation("comments");
                  setOpen(false);
                }}
              >
                <FaCommentAlt className="w-5 h-5" />
                <span>نظرات ثبت شده</span>
              </div>

              <button
                className="flex items-center gap-3 px-2 py-2 text-red-600 hover:bg-red-50 w-full text-right rounded-md"
                onClick={logOutHandler}
              >
                <FiLogOut className="w-5 h-5" />
                <span>خروج</span>
              </button>
            </div>
          </div>
        )}

        {/* desktop menu */}
        <div className="hidden md:block w-64 bg-white rounded-2xl shadow-md px-6 py-12">
          <div className="flex flex-col items-center">
            <h2 className="mt-3 font-semibold text-lg">یوسف رضایی</h2>
            <p className="text-sm text-gray-500">yosefrezaie5001@gmail.com</p>
          </div>

          <div className="mt-6 flex flex-col gap-4">
            <div
              className="flex items-center gap-3 hover:text-primary cursor-pointer"
              onClick={() => setSituation("account")}
            >
              <FaHome className="w-5 h-5" /> حساب کاربری
            </div>
            <div
              className="flex items-center gap-3 hover:text-primary cursor-pointer"
              onClick={() => setSituation("boughtProducts")}
            >
              <FaProductHunt className="w-5 h-5" /> محصولات خریداری شده
            </div>
            <div
              className="flex items-center gap-3 hover:text-primary cursor-pointer"
              onClick={() => setSituation("comments")}
            >
              <FaCommentAlt className="w-5 h-5" /> نظرات ثبت شده
            </div>

            <button
              className="flex items-center gap-3 text-red-600 hover:text-red-700 mt-4"
              onClick={logOutHandler}
            >
              <FiLogOut className="w-5 h-5" /> خروج
            </button>
          </div>
        </div>
      </div>

      {/* main content */}
      <div
        className={`mt-7 w-full md:mt-0 bg-white rounded-2xl ${
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
