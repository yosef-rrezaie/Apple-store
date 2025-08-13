"use client";
import { useState } from "react";
import AdApproval from "./AdApproval";
import RegisterAd from "./RegisterAd";
import AdComments from "./AdComments";
import AddAdmin from "./AddAdmin";

const tabs = [
  { id: "create", label: "ثبت آگهی" },
  { id: "ads", label: "تایید آگهی‌ها" },
  { id: "comments", label: "تایید نظرات کاربران" },
  { id: "addAdmin", label: "اضافه کردن مدیر جدید" },
];

function AdminUi({ email, name }) {
  const [activeTab, setActiveTab] = useState("create");

  return (
    <div className="w-full px-6">
      <div className="mt-4 flex gap-3 pb-3 overflow-x-auto scrollbar-hide">
        {tabs.map((item) => (
          <button
            key={item.id}
            className={`flex-shrink-0 px-4 py-2 rounded-[10px] font-semibold ${
              activeTab === item.id
                ? "bg-[#FF510C] text-white"
                : "bg-gray-100 text-gray-600"
            } `}
            onClick={() => setActiveTab(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      {activeTab === "create" && <RegisterAd email={email} name={name} />}
      {activeTab === "ads" && <AdApproval />}
      {activeTab === "comments" && <AdComments />}
      {activeTab === "addAdmin" && <AddAdmin text={email} />}
    </div>
  );
}

export default AdminUi;
