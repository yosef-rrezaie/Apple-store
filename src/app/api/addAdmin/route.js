import { connectDB } from "@/utils/DB/connectDB";
import User from "@/utils/DB/modelUser";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, UserReview } = await req.json();
  try {
    await connectDB();
    if (UserReview) {
      const user = await User.findOne({ email });
      if (!user) {
        return NextResponse.json({
          status: "failed",
          message: "کاربر در شبکه موجود نیست !",
        });
      }
      if (user.role === "Admin") {
        return NextResponse.json({
          status: "failed",
          message: "این کاربر ادمین می باشد !",
        });
      }
      return NextResponse.json({
        status: "success",
        email: user.email,
        role: user.role,
        name: user.name,
      });
    } else {
      const user = await User.findOne({ email });
      user.role = "Admin";
      await user.save();
      return NextResponse.json({
        status: "success",
        message: "عملیات افزودن مدیر با موفقیت انجام شد",
      });
    }
  } catch (err) {
    return NextResponse.json({ status: "failed", message: err });
  }
}
