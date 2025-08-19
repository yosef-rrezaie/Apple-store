import MainProducts from "@/components/modules/MainProducts";
import { connectDB } from "@/utils/DB/connectDB";
import { getServerSession } from "next-auth";

export default async function Page() {
  try {
    await connectDB();
    const session = await getServerSession();
    if (session) return <MainProducts emailUser={session.user.email} />;
    else return <MainProducts emailUser="NotFound" />;
  } catch (err) {
    console.error("DB error:", err);
    return notFound();
  }
}
