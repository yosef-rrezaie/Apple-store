import AdminUi from "@/components/modules/AdminUi";
import { authOptions } from "@/utils/authOptions";
import { connectDB } from "@/utils/DB/connectDB";
import User from "@/utils/DB/modelUser";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function Admin() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  const {
    user: { email },
  } = session;
  try {
    await connectDB();
  } catch (err) {
    console.log("erorr");
    return;
  }
  const user = await User.findOne({ email });
  if (user.role !== "Admin") {
    redirect("/");
  } else {
    return (
      <>
        <AdminUi email={email} name={user.name} />
      </>
    );
  }
}

export default Admin;
