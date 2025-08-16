import Image from "next/image";
import FooterList from "./FooterList";
import { footerListData } from "@/utils/FooterListData";


function Footer() {
  return (
    <div className="bg-[#FAFAFA] w-full px-6 py-6 md:grid md:grid-cols-3 md:pt-13">
      <div className="md:col-start-2 md:col-end-3 md:w-[90%]">
        <p className="font-semibold mb-2 md:text-[18px]">عضویت در خبرنامه</p>
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
      <div className=" py-2.5 block md:flex w-full md:justify-evenly md:row-start-1 md:row-end-3 md:col-span-3">
        {footerListData.map((items) => (
          <FooterList key={items.id} id={items.id} name={items.name} item={items.item} />
        ))}
      </div>
      <div
        className="bg-white rounded-2xl flex justify-between items-center p-4 mb-5 
      md:bg-[#fafafa] md:justify-center md:gap-x-4"
      >
        <div className="md:bg-white md:p-4 md:rounded-[10px]">
          <Image
            src="/svg/instagram.svg"
            width="1000"
            height="1000"
            className="w-4 h-4 md:w-6.5 md:h-6.5"
            alt="insta-icon"
          />
        </div>
        <div className="md:bg-white md:p-4 md:rounded-[10px]">
          <Image
            src="/svg/whatsapp.svg"
            width="1000"
            height="1000"
            className="w-4 h-4 md:w-6.5 md:h-6.5"
            alt="whatsapp-icon"
          />
        </div>
        <div className="md:bg-white md:p-4 md:rounded-[10px]">
          <Image
            src="/svg/twitter.svg"
            width="1000"
            height="1000"
            className="w-4 h-4 md:w-6.5 md:h-6.5"
            alt="twitter-icon"
          />
        </div>
      </div>
      <div className="flex justify-center mb-5 md:col-start-1 md:col-end-2 md:row-start-3">
        <Image
          src="/images/enamad.webp"
          width="1000"
          height="1000"
          className="w-15 h-21 md:w-24 md:h-33"
          alt="enamad-icon"
        />
      </div>
      <div className="text-[10px]   pt-2 flex justify-center md : col-span-3  md:w-full  ">
        <p className="md:text-[18px]">
          تمامی حقوق برای{" "}
          <span className="text-[#FF510C]">وبسایت اپل استور </span> محفوظ است
        </p>
      </div>
    </div>
  );
}

export default Footer;
