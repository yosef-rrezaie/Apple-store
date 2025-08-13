"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function AddAdmin({ text }) {
  const [email, setEmail] = useState("");
  const [data, setData] = useState(null);
  const router = useRouter();

  async function clickHandler() {
    if (!email) {
      return toast.error("لطفا فیلد را پر کنید");
    }
    if (text === email) {
      return toast.error("ایمیل خود را نمی توانید سرچ کنید !");
    }
    const res = await fetch("/api/addAdmin", {
      method: "POST",
      body: JSON.stringify({ email, UserReview: true }),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    if (result.status === "success") {
      setData(result);
      console.log(data);
    } else {
      setData(null);
      toast.error(result.message);
    }
  }

  async function adminHandler(email) {
    const res = await fetch("/api/addAdmin", {
      method: "POST",
      body: JSON.stringify({ email, UserReview: false }),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    if (result.status === "success") {
      toast.success(result.message);
      setInterval(() => {
        setData(null);
        setEmail("");
      }, 1000);
    }
  }
  return (
    <div className="p-4 max-w-sm">
      <div className="flex items-center gap-2">
        <input
          type="email"
          placeholder="ایمیل کاربر را وارد کنید"
          className="flex-1 p-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="bg-orange-500 text-white px-3 py-2 rounded-lg text-sm"
          onClick={clickHandler}
        >
          جستجو
        </button>
      </div>

      {!data ? (
        <p className="font-semibold text-[14px] mt-5">
          هیچ کاربری موجود نمی باشد
        </p>
      ) : (
        <div className="mt-4 p-3 bg-white shadow rounded-lg flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <p className="font-medium text-sm">{data.email}</p>
              <p className="text-xs text-gray-500">{data.name}</p>
            </div>
          </div>
          <button
            className="bg-green-500  text-white px-3 py-1.5 rounded-lg text-xs"
            disabled={false}
            onClick={() => adminHandler(data.email)}
          >
            ادمین کردن
          </button>
        </div>
      )}
      <Toaster />
    </div>
  );
}
