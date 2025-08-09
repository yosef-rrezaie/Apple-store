import { connectDB } from "@/utils/DB/connectDB";
import Ad from "@/utils/DB/modelAd";
import User from "@/utils/DB/modelUser";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectDB();
    const result = await Ad.aggregate([
      {
        $project: {
          title: 1,
          imageUrl: 1,
          comments: {
            $filter: {
              input: "$comments",
              as: "comment",
              cond: { $eq: ["$$comment.published", false] },
            },
          },
        },
      },
    ]);
    const filter = result.filter((item) => item.comments.length > 0);

    console.log(result);
    return NextResponse.json({ status: "success", data: filter });
  } catch (err) {
    return NextResponse.json({ status: "failed", data: err.message });
  }
}

export async function POST(req) {
  await connectDB();
  try {
    const { productId, commentId, email } = await req.json();
    await Ad.updateOne(
      { _id: productId, "comments._id": commentId },
      { $set: { "comments.$.published": true } }
    );
    await User.updateOne(
      { email, "comments.ProductId": productId },
      { $set: { "comments.$.published": true } }
    );

    return NextResponse.json({ status: "success", message: "نظر تایید شد" });
  } catch (err) {
    return NextResponse.json({ status: "failed", message: err.message });
  }
}

export async function DELETE(req) {
  await connectDB();
  try {
    const { productId, commentId, email , commentTitle } = await req.json();

    await Ad.updateOne(
      { _id: productId },
      { $pull: { comments: { _id: commentId } } }
    );

    await User.updateOne(
      { email },
      { $pull: { comments: { ProductId: productId , title : commentTitle  } } }
    );

    return NextResponse.json({ status: "success", message: "نظر حذف شد" });
  } catch (err) {
    return NextResponse.json({ status: "failed", message: err.message });
  }
}
