function AdminUi() {
  return (
    <div className="w-full px-6">
      <p className="mt-7 font-semibold">ثبت اطلاعات محصولات</p>
      <form className="my-4 grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-3 md: md:justify-center md:text-[18px] ">
        <div>
          <label className="text-[#FF510C]" htmlFor="title">
            عنوان کالا :
          </label>
          <input
            type="text"
            placeholder="عنوان را وارد کنید"
            className="placeholder:text-[14px] w-full border-2 rounded-[8px] outline-none p-2 border-[#FF510C21] text-[14px] mt-2"
            id="title"
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
            min={8}
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
          />
        </div>
        <button
          type="submit"
          className=" border-2 rounded-[13px] outline-none p-2 bg-[#FF510C] text-[14px] mt-2 border-none text-white md:row-start-5 md:w-[200px]"
        >
          ارسال آگهی
        </button>
      </form>
    </div>
  );
}

export default AdminUi;
