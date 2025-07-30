import Image from "next/image";
import FooterList from "./FooterList";

const footerListData = [
  { id: 1, name: "فروشگاه", item: ["مک", "آیفون", "آیپد", "اپل واچ"] },
  { id: 2, name: "لوازم جانبی", item: ["ایرپاد", "هوم پاد", "ایرتگ"] },
  {
    id: 3,
    name: "دسترسی سریع",
    item: ["حساب کاربری", "سبد خرید", "سبد خرید", "فروشگاه"],
  },
  {
    id: 4,
    name: "ارتباط با ما",
    item: ["تماس با ما", "درباره ما", "نقشه سایت"],
  },
];

function Footer() {
  return (
    <div className="bg-[#FAFAFA] w-full px-6 py-6 grid">
      <div>
        <p className="font-semibold mb-2">عضویت در خبرنامه</p>
        <div className="bg-white rounded-[7px] w-full h-[45px] flex justify-between items-center px-3 my-4">
          <input
            placeholder="ایمیل خود را وارد کنید"
            className="text-[13px] w-full h-full  focus:outline-none"
          />
          <button className="w-[85px] h-[33px] rounded-[7px] text-[#FF510C] font-semibold bg-[#FF510C21] text-[15px] ">
            عضویت
          </button>
        </div>
      </div>
      <div className=" py-2.5 block md:flex w-full md:justify-evenly md:row-start-1 md:row-end-3">
        {footerListData.map((items) => (
          <FooterList id={items.id} name={items.name} item={items.item} />
        ))}
      </div>
      <div className="bg-white rounded-2xl flex justify-between items-center p-4 mb-5">
        <Image
          src="/svg/instagram.svg"
          width="1000"
          height="1000"
          className="w-4 h-4"
          alt=""
        />
        <Image
          src="/svg/whatsapp.svg"
          width="1000"
          height="1000"
          className="w-4 h-4"
          alt=""
        />
        <Image
          src="/svg/twitter.svg"
          width="1000"
          height="1000"
          className="w-4 h-4"
          alt=""
        />
      </div>
      <div className="mx-auto mb-5">
        <Image
          src="/images/enamad.webp"
          width="1000"
          height="1000"
          className="w-15 h-21"
        />
      </div>
      <div className="text-[10px] w-full  pt-2 flex justify-center ">
        <p className="">
          تمامی حقوق برای {" "}
          <span className="text-[#FF510C]">وبسایت اپل استور </span> محفوظ است
        </p>
      </div>
    </div>
  );
}

export default Footer;
