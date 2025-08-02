import { connectDB } from "@/utils/DB/connectDB";
import User from "@/utils/DB/modelUser";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    await connectDB();
  } catch (err) {
    return NextResponse.json({ status: "failed" }, { status: 500 });
  }
  const { email, password } = req.json();

  if (!email || !password) {
    return NextResponse.json(
      { status: "failed", message: "Invalid Data" },
      { status: 422 }
    );
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return NextResponse.json({
      status: "failed",
      message: "User exist already",
    } , {status : 200});
  }

  const hasshedPassword = await hash(password, 15);
    const newUser = await User.create({
      email,
      password: hasshedPassword,
    });
   return NextResponse.json({ status: "success", message: "User created" } , {status : 201});
}
