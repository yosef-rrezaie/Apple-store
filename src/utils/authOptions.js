import { connectDB } from "@/utils/DB/connectDB";
import User from "@/utils/DB/modelUser";
import { compare } from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connectDB();
        } catch (err) {
          throw new Error("خطا در اتصال به سرور");
        }

        if (!email || !password) {
          throw new Error("لطفا همه فیلدها را پر کنید");
        }

        const user = await User.findOne({ email });
        console.log(user);

        if (!user) {
          throw new Error("کاربر یافت نشد");
        }

        const isValid = await compare(password, user.password);
        console.log(isValid);

        if (!isValid) {
          throw new Error("ایمیل یا گذرواژه اشتباه است");
        }

        return { email };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
