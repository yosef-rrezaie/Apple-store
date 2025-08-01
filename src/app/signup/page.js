"use client";
import Image from "next/image";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

function SignUp() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const styleUi = "text-blue absolute left-[10px] top-[60%]";
  function clickHandler(e) {
    console.log(password);
  }
  return (
    <div className="px-6 mt-16 lg:border lg:border-blue-500  lg:mx-auto lg:mt-auto lg:px-4 lg:py-6 
   lg:w-full lg:h-screen lg:flex lg:justify-center lg:items-center">
      <div className="lg:w-[450px] lg:border lg:border-[#e3dfde] lg:px-4 lg:py-12 lg:rounded-[13px]">
        <form className=" w-full px-6">
          <div className="flex justify-center items-center mb-7">
            <Image
              src="./svg/app-store.svg"
              width="1000"
              height="1000"
              className="w-14 h-14 lg:w-18 lg:h-18"
              alt="app-store"
            />
          </div>
          <div className="flex justify-center mb-9">
            <p className="text-[22px] text-[#91563f] font-bold lg:text-[24px]">ثبت نام</p>
          </div>
          <div className="flex flex-col gap-y-2.5 mb-5">
            <label className="font-semibold text-[#FF510C] lg:text-[18px]" htmlFor="email">
              ایمیل :
            </label>
            <input
              type="email"
              className=" border-2 p-2 rounded-[10px] outline-none  border-[#FF510C21] text-[14px] lg:p-3"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-y-2.5 mb-9 lg:mb-12 relative">
            <label className="font-semibold text-[#FF510C] lg:text-[18px]" htmlFor="password">
              گذرواژه :
            </label>
            <input
              type={!showPassword ? "password" : "text"}
              className=" border-2 p-2 rounded-[10px] outline-none  border-[#FF510C21] text-[14px] lg:p-3"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!showPassword ? (
              <FaRegEyeSlash
                className={styleUi}
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <FaRegEye
                className={styleUi}
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
          <div>
            <button
              onClick={clickHandler}
              className="w-full border-2 rounded-[13px] outline-none p-2
               bg-[#FF510C] text-[14px] border-none text-white font-semibold lg:text-[16px] lg:p-3"
            >
              ثبت نام
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
