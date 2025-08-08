import { connectDB } from "@/utils/DB/connectDB";
import Ad from "@/utils/DB/modelAd";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const ads = await Ad.find({});
    return NextResponse.json({ status: "success", ads });
  } catch (err) {
    return NextResponse.json({ status: "failed", data: err.message });
  }
}
