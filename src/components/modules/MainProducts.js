"use client";
import { sp } from "@/utils/replaceNumber";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { MdFindInPage } from "react-icons/md";

const sortOption = [
  "همه",
  "اپل واچ",
  "ایرپاد",
  "آیپد",
  "آیفون",
  "شارژر",
  "هوم پاد",
  "اپل تی وی",
];

function MainProducts({ emailUser }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [priceSort, setPriceSort] = useState(searchParams.get("sort") || 101);
  const [categorySort, setCategorySort] = useState(
    searchParams.get("category") || "همه"
  );
  const search = searchParams.get("search") || "";
  console.log(search);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams();
    params.set("sort", priceSort);
    params.set("category", categorySort);
    const searchValue = searchParams.get("search") || "";
    if (searchValue.trim() !== "") {
      params.set("search", searchValue);
    }

    fetch(`/api/getFilterProducts?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [priceSort, categorySort, search , searchParams]);
  console.log(products);

  const categoryHandler = (category) => {
    setCategorySort(category);
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", category);
    router.replace(`?${params.toString()}`);
  };

  const sortHandler = (e) => {
    const selectedSort = e.target.value;
    setPriceSort(selectedSort);
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", selectedSort);
    router.replace(`?${params.toString()}`);
  };

  async function basketHandler(email, id, number) {
    if (emailUser === "NotFound")
      return toast.error("ابتدا وارد حساب خود شوید");
    const res = await fetch("/api/basket", {
      method: "POST",
      body: JSON.stringify({
        email,
        productId: id,
        number,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    console.log("result : ", result);
    if (result.status === "success") {
      toast.success(result.message);
    } else {
      toast.error("مشکل در سرور");
    }
  }

  function clickHandler(id) {
    router.push(`/products/${id}`)
  }

  return (
    <div className="mt-6 px-6">
      <div className="mt-4 space-y-4">
        <div className="flex items-center justify-between">
          <label
            htmlFor="sort"
            className="text-[14px] md:text-[16px] font-medium text-gray-700"
          >
            مرتب‌سازی:
          </label>
          <select
            id="sort"
            className="border border-primary text-sm rounded-md p-1 focus:outline-none focus:ring-1 focus:ring-orange-500"
            value={priceSort}
            onChange={sortHandler}
          >
            <option value="101">ارزان‌ترین</option>
            <option value="102">گران‌ترین</option>
            <option value="103">جدیدترین</option>
            <option value="104">قدیمی ترین</option>
          </select>
        </div>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-3 w-max">
            {sortOption.map((category) => (
              <button
                key={category}
                onClick={() => categoryHandler(category)}
                className={`whitespace-nowrap border border-gray-300 px-3 py-1 md:px-4 lg:px-5 text-sm rounded-full
                 hover:bg-orange-100 hover:border-orange-400 transition ${
                   category === categorySort && "bg-primary text-white"
                 }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8 ${
          products.length || loading ? "grid" : "block"
        }`}
      >
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bg-[#F6F6F6] rounded-[10px] p-4 shadow-sm animate-pulse"
            >
              <div className="flex justify-center">
                <div className="w-full h-40 bg-gray-300 rounded-md"></div>
              </div>
              <div className="h-4 bg-gray-300 rounded-md mt-4 w-3/4 mx-auto"></div>
              <div className="mt-4 border-t border-gray-200"></div>
              <div className="flex flex-col items-center mb-5 md:mb-8 mt-4 gap-2">
                <div className="h-5 bg-gray-300 rounded-md w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded-md w-1/3"></div>
              </div>
              <div className="mt-4 flex justify-end">
                <div className="h-8 bg-gray-300 rounded-md w-20"></div>
              </div>
            </div>
          ))
        ) : products.length ? (
          products.map((p) => (
            <div
              key={p._id}
              className="bg-[#F6F6F6] rounded-[10px] p-4 shadow-sm hover:shadow-md transition"
              onClick={()=>clickHandler(p._id)}
            >
              <div className="flex justify-center">
                <Image
                  src={p.imageUrl || "/images/pc-laptop.png"}
                  width={300}
                  height={200}
                  className="w-full max-h-40 object-contain"
                  alt={p.title}
                />
              </div>
              <p className="text-center font-semibold mt-2">{p.title}</p>
              <div className="mt-2 border-t border-gray-200"></div>
              <div className=" flex flex-col items-center mb-5 md:mb-8 mt-4 justify-center">
                {p.discount === 0 ? (
                  <p className="text-red-600 text-xl font-bold">
                    {sp(p.price)} تومان
                  </p>
                ) : (
                  <p className="text-red-600 text-xl font-bold">
                    {sp(p.price - (p.discount / 100) * p.price)} تومان
                  </p>
                )}
                <div className="flex items-center gap-2 mt-1">
                  {p.discount === 0 ? (
                    <span className="invisible">٪0 تخفیف</span>
                  ) : (
                    <span className="text-sm text-white bg-red-500 px-2 py-0.5 rounded-full">
                      ٪{sp(p.discount)} تخفیف
                    </span>
                  )}
                  <p
                    className={`line-through text-gray-400 text-sm ${
                      p.discount === 0 && "hidden"
                    }`}
                  >
                    {sp(p.price)} تومان
                  </p>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  className="bg-orange-500 text-white px-3 py-1 rounded-md text-sm hover:bg-orange-600 transition"
                  onClick={() => basketHandler(emailUser, p._id, 1)}
                >
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="mt-30 h-full w-full flex flex-col gap-5 items-center justify-center">
            <p className="text-[18px] font-semibold md:text-[20px]">
              گشتم نبود ، نگرد نیست !
            </p>
            <MdFindInPage className="text-primary text-9xl md:text-[145px]" />
          </div>
        )}
      </div>

      <Toaster />
    </div>
  );
}

export default MainProducts;
