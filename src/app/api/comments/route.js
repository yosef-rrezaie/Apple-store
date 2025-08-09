import { connectDB } from "@/utils/DB/connectDB";
import Ad from "@/utils/DB/modelAd";
import User from "@/utils/DB/modelUser";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
    const { id, title, email } = await req.json();
    const { name } = await User.findOne({ email });
    // const ad = await Ad.findOne({ _id: id });
    await Ad.updateOne(
      { _id: id },
      { $push: { comments: { id, title, email, name } } }
    );
    // ad.comments = [{ title, email, name }];
    // ad.save();
    return NextResponse.json({
      status: "success",
      message: "نظر شما با موفقیت ثبت شد ، پس از تایید در سایت قرار می گیرد",
    });
  } catch (err) {
    return NextResponse.json({ status: "failed", data: err.message });
  }
}
