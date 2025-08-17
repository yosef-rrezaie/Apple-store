import DashboardPage from "@/components/modules/DashboardPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function Dashboard() {
  const session = await getServerSession();
  console.log(session);
  if (!session) {
    redirect("/signin");
  }
  return <DashboardPage email={session.user.email}/>;
}

export default Dashboard;
