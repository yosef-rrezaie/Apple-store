import Image from "next/image";

function CategoriesComponent({ title, img }) {
  return (
    <div className="w-[76px] h-[80px] bg-[#FAFAFA] rounded-[8px] flex flex-col justify-center items-center gap-3">
      <Image
        src={`./svg/${img}.svg`}
        width={33}
        height={33}
        alt={title}
        className="lg:w-[44px] lg:h-[44px]"
      />
      <p
        className={`text-[12px] font-semibold text-[#747474] ${
          title === "ایرپاد" && "text-primary"
        } lg:text-base`}
      >
        {title}
      </p>
    </div>
  );
}

export default CategoriesComponent;
