import Image from "next/image";

function AdComments() {
  return (
    <div className ="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="w-full bg-white rounded-lg shadow-md p-4 flex flex-col gap-4">
        <div className="w-full flex justify-center">
          <Image
            src="/images/airpadmax.png"
            width={1000}
            height={1000}
            alt="محصول"
            className="w-24 h-24 object-cover rounded-md"
          />
        </div>

        <div className="text-center">
          <p className="text-gray-800 font-medium">"کیفیتش عالیه"</p>
          <span className="text-sm text-gray-500">— محمد رضایی</span>
        </div>

        <div className="flex gap-3 justify-between">
          <button className="bg-orange-500 text-white px-3 py-1 rounded-md text-sm hover:bg-orange-600 transition">
            تایید
          </button>
          <button className="bg-orange-500 text-white px-3 py-1 rounded-md text-sm hover:bg-orange-600 transition">
            حذف
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdComments;
