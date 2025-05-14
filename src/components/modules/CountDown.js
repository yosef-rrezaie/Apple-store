import { e2p } from "@/utils/replaceNumber";
const squareStyle =
  "w-8 h-8 text-primary bg-card text-center flex items-center justify-center rounded-[8px] lg:w-[70px] lg:h-[70px] lg:text-[21px]";
const dayStyle =
  "w-8 h-8 text-white bg-primary text-center flex items-center justify-center rounded-[8px] lg:w-[70px] lg:h-[70px] lg:text-[21px]";

function CountDown() {
  return (
    <div className="px-6 text-[#FF510C] font-bold flex items-center justify-between mt-[50px] mb-[40px]">
      <p className="lg:text-[30px]">پیشنهاد شگفت انگیر</p>
      <div className="hidden lg:block lg:border-b-[5px] lg:border-b-card lg:border-solid w-[585px]"></div>
      <div className="flex gap-x-1.5 font-semibold text-[13px]" dir="ltr">
        <div className="flex flex-col gap-y-1.5 items-center">
          <span className={dayStyle}>{e2p("01")}</span>
          <p className="text-[10px] lg:text-[15px]">روز</p>
        </div>
        <div className="flex flex-col gap-y-1.5 items-center">
          <span className={squareStyle}>{e2p("23")}</span>
          <p className="text-[10px] lg:text-[15px] text-black">ساعت</p>
        </div>
        <div className="flex flex-col gap-y-1.5 items-center">
          <span className={squareStyle}>{e2p("10")}</span>
          <p className="text-[10px] lg:text-[15px] text-black">دقیقه</p>
        </div>
        <div className="flex flex-col gap-y-1.5 items-center">
          <span className={squareStyle}>{e2p("18")}</span>
          <p className="text-[10px] lg:text-[15px] text-black">ثانیه</p>
        </div>
      </div>
    </div>
  );
}

export default CountDown;
