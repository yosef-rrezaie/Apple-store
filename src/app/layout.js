import "./globals.css";

export const metadata = {
  title: "Mobile Store",
  description: "Mobile store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-sans">
        
        {children}
        </body>
    </html>
  );
}
