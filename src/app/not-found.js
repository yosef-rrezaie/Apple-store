import { MdErrorOutline } from "react-icons/md";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <MdErrorOutline size={80} color="#FF510C" />

      <h1 className="mt-4 text-2xl font-bold text-gray-800">
        صفحه پیدا نشد
      </h1>

      <p className="mt-2 text-gray-600 text-center max-w-sm">
        متأسفانه صفحه‌ای که به دنبال آن بودید وجود ندارد.
      </p>

      <Link
        href="/"
        className="mt-6 bg-[#FF510C] hover:bg-[#ff6d3a] text-white px-5 py-2 rounded-lg transition"
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}
