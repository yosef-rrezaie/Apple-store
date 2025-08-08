"use client";
import { useState } from "react";
import AdApproval from "./AdApproval";
import RegisterAd from "./RegisterAd";

const tabs = [
  { id: "create", label: "ثبت آگهی" },
  { id: "ads", label: "تایید آگهی‌ها" },
  { id: "comments", label: "تایید نظرات کاربران" },
];

function AdminUi({ email, name }) {
  const [activeTab, setActiveTab] = useState("create");

  return (
    <div className="w-full px-6">
      <div className="mt-4 flex gap-3  pb-3">
        {tabs.map((item) => (
          <button
            key={item.id}
            className={`px-4 py-2 rounded-[10px] font-semibold ${
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
    </div>
  );
}

export default AdminUi;
