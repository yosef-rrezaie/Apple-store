import { authOptions } from "@/utils/authOptions";
import { connectDB } from "@/utils/DB/connectDB";
import User from "@/utils/DB/modelUser";
import { getServerSession } from "next-auth";

import NoPannel from "./NoPannel";
import Pannel from "./Pannel";

async function UserInfo() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return <NoPannel />;
  } else {
    const {
      user: { email },
    } = session;
    try {
      await connectDB();
      const authUser = await User.findOne({ email });
      console.log(authUser.role);
      return <Pannel role={authUser.role}/>

    }catch(err) {
      console.log(err)
    }
  }
}

export default UserInfo;
