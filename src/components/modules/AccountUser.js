"use client";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function AccountUser({ email }) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  async function clickHandler() {
    if (!oldPassword || !newPassword) {
      return toast.error("لطفا همه فیلدهارا پر کنید");
    }
    const res = await fetch("/api/changePassword", {
      method: "POST",
      body: JSON.stringify({ email, oldPassword, newPassword }),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    console.log(result);
    if (result.status === "failed") {
      return toast.error(result.message);
    }
    if (result.status === "success") {
      toast.success(result.message);
      setNewPassword("");
      setOldPassword("");
    }
  }

  return (
    <div className="p-8">
      <p className="text-[25px]">سلام یوسف رضایی عزیز ❤️</p>
      <p className="mt-3 text-primary">ایمیل شما : yosefrezaie5001@gmail.com</p>
      <div className="mt-4">
        <p className="font-semibold">تغییر پسورد :</p>
        <div className="mt-5 flex flex-col gap-2">
          <label className="">رمز عبور کنونی : </label>
          <input
            className="outline-none border-primary border rounded-[10px] p-2 w-[200px]"
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div className="mt-5 flex flex-col gap-2">
          <label className="">رمز عبور جدید : </label>
          <input
            className="outline-none border-primary border rounded-[10px] p-2 w-[200px]"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
      </div>
      <button
        className="w-[150px] bg-primary text-white p-2 mt-7 font-semibold rounded-2xl"
        onClick={clickHandler}
      >
        تایید
      </button>
      <Toaster />
    </div>
  );
}

export default AccountUser;
