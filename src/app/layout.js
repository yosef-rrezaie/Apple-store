import Header from "../components/layout/Header";
import "./globals.css";

export const metadata = {
  title: "Mobile Store",
  description: "Mobile store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-sans">
        {/* <div className="bg-primary h-13 md:h-[70px] md:text-base flex justify-center items-center text-[13px] font-semibold text-white">
          <p>تا ۷۰٪ تخفیف برای لوازم جانبی اورجینال آیفون</p>
        </div> */}
        {/* <Header/> */}
        {children}
      </body>
    </html>
  );
}
