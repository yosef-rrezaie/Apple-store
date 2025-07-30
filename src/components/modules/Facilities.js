import FacilitiesCard from "./FacilitiesCard";

const details = [
  { id: 1, icon: "/svg/call.svg", name: "پشتیبانی ۲۴ ساعته" },
  { id: 2, icon: "/svg/scan.svg", name: "ضمانت اصالت کالا" },
  { id: 3, icon: "/svg/Wallet.svg", name: "امکان پرداخت در محل" },
  { id: 4, icon: "/svg/send.svg", name: "ارسال سریع" },
];
function Facilities() {
  return (
    <div className="grid grid-cols-2 gap-4 mb-5 px-6 mt-24 md:px-0 md:grid-cols-4 md:gap-0">
      {details.map((item) => (
        <FacilitiesCard key={item.id} icon={item.icon} name={item.name} />
      ))}
    </div>
  );
}

export default Facilities;
