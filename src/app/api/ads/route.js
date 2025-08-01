import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import { connectDB } from "@/utils/DB/connectDB";
import Ad from "@/utils/DB/modelAd";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const upload = multer({ storage: multer.memoryStorage() });

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });
}

export async function POST(req) {
  const formData = await req.formData();

  const title = formData.get("title");
  const description = formData.get("description");
  const price = formData.get("price");
  const code = formData.get("code");
  let discount = formData.get("discount");
  const image = formData.get("image");
  if (!title || !description || !price || !code || !image) {
    return NextResponse.json({
      status: "failedData",
      message:
        "لطفا همه فیلد ها را پر کنید ، در صورت وارد نکردن کد تخفیف مقدار صفر لحاظ می شود",
    });
  }
  if (!discount) {
    discount = 0;
  }

  const buffer = await image.arrayBuffer();
  const base64 = Buffer.from(buffer).toString("base64");
  const dataUri = `data:${image.type};base64,${base64}`;

  try {
    await connectDB();

    const result = await cloudinary.uploader.upload(dataUri, {
      folder: "ads",
    });

    const newAd = await Ad.create({
      title,
      description,
      price,
      code,
      discount,
      imageUrl: result.secure_url,
    });

    return NextResponse.json({ status: "success", ad: newAd });
  } catch (err) {
    return NextResponse.json(
      { status: "failed", error: err.message },
      { status: 500 }
    );
  }
}
