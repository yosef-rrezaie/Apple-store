"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
function SignUpIn({ title, type }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const styleUi = "text-blue absolute left-[10px] top-[60%]";
  const router = useRouter();
  async function submitHandler(e) {
    e.preventDefault();

    if (type === "signup") {
      if (!email || !password || !name) {
        toast.error("لطفا همه فیلدها را پر کنید");
        return;
      }
      setLoading((loading) => !loading);

      const data = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({ email, password, name }),
        headers: { "Content-Type": "application/json" },
      });
      const res = await data.json();
      setLoading((loading) => !loading);
      if (res.status === "failed") toast.error(res.message);
      if (res.status === "success") {
        toast.success(res.message);
        setInterval(() => {
          router.push("/signin");
        }, 1500);
      }
    } else {
      if (!email || !password) {
        toast.error("لطفا همه فیلدها را پر کنید");
        return;
      }
      setLoading((loading) => !loading);
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      setLoading((loading) => !loading);

      if (res.error) {
        toast.error(res.error);
        return;
      } else {
        router.push("/");
      }
    }
  }
  return (
    <div
      className="px-6 mt-16 lg:border lg:border-blue-500  lg:mx-auto lg:mt-auto lg:px-4 lg:py-6 
      lg:w-full lg:h-screen lg:flex lg:justify-center lg:items-center"
    >
      <div className="lg:w-[450px] lg:border lg:border-[#e3dfde] lg:px-4 lg:py-12 lg:rounded-[13px]">
        <form className=" w-full px-6" onSubmit={submitHandler}>
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
            <p className="text-[22px] text-[#91563f] font-bold lg:text-[24px]">
              {title}
            </p>
          </div>
          <div className="flex flex-col gap-y-2.5 mb-5">
            <label
              className="font-semibold text-[#FF510C] lg:text-[18px]"
              htmlFor="email"
            >
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
          <div className="flex flex-col gap-y-2.5 mb-5 lg:mb-8 relative">
            <label
              className="font-semibold text-[#FF510C] lg:text-[18px]"
              htmlFor="password"
            >
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
          {type === "signup" && (
            <div className="flex flex-col gap-y-2.5 mb-10">
              <label
                className="font-semibold text-[#FF510C] lg:text-[18px]"
                htmlFor="name"
              >
                نام فروشگاه :
              </label>
              <input
                type="text"
                className=" border-2 p-2 rounded-[10px] outline-none  border-[#FF510C21] text-[14px] lg:p-3"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          <div className="relative">
            <button
              type="submit"
              className="w-full border-2 rounded-[13px] outline-none p-2
               bg-[#FF510C] text-[14px] border-none text-white font-semibold lg:text-[16px] lg:p-3 disabled:bg-[#eab199]"
              disabled={!!loading && true}
            >
              {title}
            </button>
            <div
              className={`w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin 
              absolute left-[10px] top-[30%] ${!loading && "hidden"}
              }`}
            ></div>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
}

export default SignUpIn;
