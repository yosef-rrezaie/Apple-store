import { connectDB } from "@/utils/DB/connectDB";
import Ad from "@/utils/DB/modelAd";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { productsId } = await params;
  try {
    await connectDB();
    const ads = await Ad.find({});
    const filteredAd = ads.filter((item) => item.code === Number(productsId));
    return NextResponse.json({ status: "success", data: filteredAd[0] });
  } catch (err) {
    return NextResponse.json({ status: "failed", data: err.message });
  }
}
