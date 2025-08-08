"use client";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { numberToWords } from "@persian-tools/persian-tools";
import RegisterAd from "./RegisterAd";

const tabs = [
  { id: "create", label: "ثبت آگهی" },
  { id: "ads", label: "تایید آگهی‌ها" },
  { id: "comments", label: "تایید نظرات کاربران" },
];

function AdminUi({ email, name }) {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [features, setFeatures] = useState([{ id: uuidv4(), title: "" }]);
  const [category, setCategory] = useState("اپل واچ");
  const [price, setPrice] = useState("");
  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileRef = useRef(null);

  const [activeTab, setActiveTab] = useState("create");

  function featureAddHandler(e) {
    setFeatures([...features, { id: uuidv4(), title: "" }]);
  }

  function featureDeleteHandler(id) {
    const featuresFiltered = features.filter((item) => item.id !== id);
    setFeatures(featuresFiltered);
    console.log(features);
  }

  function changeHandler(value, id) {
    const updated = features.map((item) =>
      item.id === id ? { ...item, title: value } : item
    );
    setFeatures(updated);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const invalidFeature = features.some((item) => item.title.trim() === "");
    if (!title || !description || !price || !code || !image || invalidFeature) {
      toast.error("لطفاً همه فیلدها را به‌درستی پر کنید");
      return;
    }

    setLoading((loading) => !loading);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("code", code);
    formData.append("discount", discount);
    formData.append("image", image);
    formData.append("email", email);
    formData.append("features", JSON.stringify(features));
    formData.append("category", category);
    formData.append("name", name);

    const res = await fetch("/api/ads", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setLoading((loading) => !loading);
    console.log(data);
    if (data.status === "success") {
      toast.success("اگهی ثبت شد");
      setTitle("");
      setDesc("");
      setPrice("");
      setCode("");
      setDiscount("");
      setImage(null);
      setFeatures([{ id: uuidv4(), title: "" }]);
      setCategory("اپل واچ");
      fileRef.current.value = "";
    } else if (data.status === "failedData") {
      toast.error(data.message);
    } else {
      toast.error("خطا در ارتباط با سرور");
    }
  }
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
            onClick={()=>setActiveTab(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <RegisterAd email={email} name={name}/>
      {/*  */}
    </div>
  );
}

export default AdminUi;
