import User from "@/components/layout/User";
import { connectDB } from "@/utils/DB/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  session: { strategy: "jwt" },
  providers: [CredentialsProvider],
  async authtorize(credentials, req) {
    const { email, password } = credentials;
    try {
      await connectDB();
    } catch (err) {
      throw new Error("خطا در ارتباط با سرور");
    }

    if (!email || !password) {
      throw new Error("ایمیل یا گذرواژه اشتباه است");
    }

    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("ایمیل اشتباه است");
    }
    if (password !== user.password) {
      throw new Error("ایمیل یا گذروژه اشتباه است");
    }

    return { email };
  },
};

export default NextAuth(authOptions);
