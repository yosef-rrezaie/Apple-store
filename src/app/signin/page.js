import SignUpIn from "@/components/modules/SignUpIn";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function SignIn() {
    const session = await getServerSession(authOptions);
    if(session) {
        redirect("/")
    }

  return (
    <div>
      <SignUpIn title="ورود" type="signin"  />
    </div>
  );
}

export default SignIn;
