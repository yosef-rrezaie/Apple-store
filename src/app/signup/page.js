import SignUpIn from "@/components/modules/SignUpIn";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function SignUp() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }
  return (
    <>
      <SignUpIn title="ثبت نام" type="signup"  />
    </>
  );
}

export default SignUp;
