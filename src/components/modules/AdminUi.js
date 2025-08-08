"use client";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { numberToWords } from "@persian-tools/persian-tools";

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
      <div>
        <p className="mt-7 font-semibold">ثبت اطلاعات محصولات</p>
        <form
          className="my-4 grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-3 md: md:justify-center md:text-[18px] "
          onSubmit={handleSubmit}
        >
          <div>
            <label className="text-[#FF510C]" htmlFor="title">
              عنوان کالا :
            </label>
            <input
              type="text"
              placeholder="عنوان را وارد کنید"
              className="placeholder:text-[14px] w-full border-2 rounded-[8px] outline-none p-2 border-[#FF510C21] text-[14px] mt-2"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="w-full">
            <p className="text-[#FF510C]">نوع محصول :</p>
            <select
              className="bg-white w-full border-2 rounded-[8px] border-[#FF510C21] p-2 mt-2 outline-none text-[14px] 
          appearance-none"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="اپل واچ">اپل واچ</option>
              <option value="ایرپاد">ایرپاد</option>
              <option value="آیپد">آیپد</option>
              <option value="آیفون">آیفون</option>
              <option value="شارژر">شارژر</option>
              <option value="هوم پاد">هوم پاد</option>
            </select>
          </div>
          <div className="md:row-start-2">
            <label className="text-[#FF510C]" htmlFor="description">
              توضیحات کالا :
            </label>
            <textarea
              placeholder="توضیحات را وارد کنید"
              className="placeholder:text-[14px] w-full border-2 rounded-[8px] outline-none p-2 border-[#FF510C21] text-[14px] mt-2"
              id="description"
              value={description}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="md:row-start-3 md:col-span-2">
            <p className="text-[#FF510C] ">ویژگی های محصول : </p>
            {features.map((item) => (
              <div
                key={item.id}
                className="flex justify-center items-center gap-x-1.5"
              >
                <input
                  type="text"
                  className="placeholder:text-[14px] w-full border-2 rounded-[8px] outline-none p-2 border-[#FF510C21] text-[14px] mt-2 mb-2"
                  value={item.title}
                  onChange={(e) => changeHandler(e.target.value, item.id)}
                />
                {features.length > 1 && (
                  <MdDelete
                    className=" text-[#FF510C] w-6 h-6"
                    onClick={() => featureDeleteHandler(item.id)}
                  />
                )}
              </div>
            ))}

            <div className="w-full flex justify-end mt-2">
              <button
                type="button"
                className="w-10 h-10"
                onClick={featureAddHandler}
              >
                <Image
                  src="/svg/plus.svg"
                  width="1000"
                  height="1000"
                  className="w-10 h-10"
                  alt="plus"
                />
              </button>
            </div>
          </div>
          <div>
            <label className="text-[#FF510C]" htmlFor="price">
              قیمت کالا :
            </label>
            <input
              type="number"
              placeholder="قیمت را وارد کنید (تومان)"
              className="placeholder:text-[14px] w-full border-2 rounded-[8px] outline-none p-2 border-[#FF510C21] text-[14px] mt-2"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            {price && (
              <p className="text-[12px] mt-[5px]">
                {numberToWords(price)}{" "}
                <span className="text-red-600">تومان</span>
              </p>
            )}
          </div>
          <div className="">
            <label className="text-[#FF510C]" htmlFor="code">
              کد کالا :
            </label>
            <input
              type="number"
              placeholder="کد را وارد کنید"
              className="placeholder:text-[14px] w-full border-2 rounded-[8px] outline-none p-2 border-[#FF510C21] text-[14px] mt-2"
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <div>
            <label className="text-[#FF510C]" htmlFor="discount">
              اعمال تخفیف :
            </label>
            <input
              type="number"
              placeholder="مقدار تخفیف را وارد کنید"
              className="placeholder:text-[14px] w-full border-2 rounded-[8px] outline-none p-2 border-[#FF510C21] text-[14px] mt-2"
              id="discount"
              min={0}
              max={100}
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />
          </div>
          <div>
            <label className="text-[#FF510C]" htmlFor="photo">
              ارسال عکس
            </label>
            <input
              type="file"
              className="placeholder:text-[14px] w-full border-2 rounded-[8px] outline-none p-2 border-[#FF510C21] text-[14px] mt-2"
              id="photo"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              ref={fileRef}
            />
          </div>
          <div className="w-full mt-2 relative  md:w-[220px]  md:h-[50px] md:row-start-6">
            <button
              type="submit"
              className=" w-full border-2 rounded-[13px] outline-none p-2 bg-[#FF510C] text-[14px] border-none text-white 
           disabled:bg-[#eab199]"
              disabled={!!loading && true}
            >
              ارسال آگهی
            </button>
            <div
              className={`w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin 
              absolute left-[10px] top-[30%] md:top-[25%] ${
                !loading && "hidden"
              }`}
            ></div>
          </div>
        </form>
        <Toaster />
      </div>
    </div>
  );
}

export default AdminUi;
