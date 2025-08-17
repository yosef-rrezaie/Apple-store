import { connectDB } from "@/utils/DB/connectDB";
import User from "@/utils/DB/modelUser";
import { compare, hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
    const { email, oldPassword, newPassword } = await req.json();
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({
        status: "failed",
        message: "User doesnt exist",
      });
    }

    const verify = await compare(oldPassword, user.password);
    console.log(verify);
    if (!verify) {
      return NextResponse.json({
        status: "failed",
        message: "رمز کنونی شما اشتباه است",
      });
    }
    const hasshedPassword = await hash(newPassword, 15);
    user.password = hasshedPassword;
    await user.save();
    return NextResponse.json({ status: "success" , message : "گذرواژه با موفقیت تغییر کرد" });
  } catch (err) {
    return NextResponse.json({ status: "failed", data: err });
  }
}
