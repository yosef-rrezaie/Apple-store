import { connectDB } from "@/utils/DB/connectDB";
import Ad from "@/utils/DB/modelAd";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const ads = await Ad.find({ published: false });
    return NextResponse.json({ status: "success", data: ads });
  } catch (err) {
    return NextResponse.json({ status: "failed", data: err.message });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const {id} = await req.json()
    const ad = await Ad.findOne({_id : id})
    console.log(ad)
    ad.published = true
    ad.save()
    return NextResponse.json({ status: "success"});
  } catch (err) {
    return NextResponse.json({ status: "failed"});
  }
}
