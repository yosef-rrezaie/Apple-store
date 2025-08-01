"use client";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function AdminUi() {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const fileRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading((loading) => !loading);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("code", code);
    formData.append("discount", discount);
    formData.append("image", image);

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
      fileRef.current.value = ""
    } else if (data.status === "failedData") {
      toast.error(data.message);
    } else {
      toast.error("خطا در ارتباط با سرور");
    }
  }
  return (
    <div className="w-full px-6">
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
        <div className="md:row-start-2 md:col-span-2">
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
        </div>
        <div>
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
        <div className="w-full mt-2 relative md:row-start-5 md:w-[220px]  md:h-[50px]">
          <button
            type="submit"
            className=" w-full border-2 rounded-[13px] outline-none p-2 bg-[#FF510C] text-[14px] border-none text-white md:row-start-5 
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
  );
}

export default AdminUi;
