import { connectDB } from "@/utils/DB/connectDB";
import User from "@/utils/DB/modelUser";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    await connectDB();
  } catch (err) {
    return NextResponse.json({ status: "failed" , message : "خطا در برقراری با سرور" }, { status: 500 });
  }
  const { email, password } = await req.json();
  console.log(email , password)

  if (!email || !password) {
    return NextResponse.json(
      { status: "failed", message: "لطفا همه فیلدها را پر کنید" },
      { status: 422 }
    );
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return NextResponse.json({
      status: "failed",
      message: "این ایمیل در سیستم ثبت شده است",
    } , {status : 200});
  }

  const hasshedPassword = await hash(password, 15);
    const newUser = await User.create({
      email,
      password: hasshedPassword,
    });
   return NextResponse.json({ status: "success", message: "ثبت نام با موفقیت انجام شد" } , {status : 201});
}
