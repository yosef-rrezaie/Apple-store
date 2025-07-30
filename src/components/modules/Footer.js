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
    <div className="bg-[#FAFAFA] w-full">
      <div className="px-6 py-2.5 block md:flex w-full md:justify-evenly">
        {footerListData.map((items) => (
          <FooterList id={items.id} name={items.name} item={items.item} />
        ))}
      </div>
    </div>
  );
}

export default Footer;
