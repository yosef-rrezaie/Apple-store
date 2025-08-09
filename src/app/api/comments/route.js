import { connectDB } from "@/utils/DB/connectDB";
import Ad from "@/utils/DB/modelAd";
import User from "@/utils/DB/modelUser";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    await connectDB();
    const { id, title, email } = await req.json();
    console.log(typeof id);
    const { name } = await User.findOne({ email });
    await Ad.updateOne(
      { _id: id },
      { $push: { comments: { id, title, email, name } } },
      { session }
    );

    await User.updateOne(
      { email },
      { $push: { comments: { title, ProductId: id } } },
      { session }
    );
    await session.commitTransaction();

    return NextResponse.json({
      status: "success",
      message: "نظر شما با موفقیت ثبت شد ، پس از تایید در سایت قرار می گیرد",
    });
  } catch (err) {
    await session.abortTransaction();
    return NextResponse.json({ status: "failed", data: err.message });
  }
}
