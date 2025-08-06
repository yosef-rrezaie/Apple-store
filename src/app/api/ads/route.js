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
  const email = formData.get("email");
  const features = formData.get("features");
  const category = formData.get("category");
  const name = formData.get("name");

  if (!title || !description || !price || !code) {
    return NextResponse.json({
      status: "failedData",
      message: "لطفاً همه فیلدها را به‌درستی پر کنید",
    });
  }

  if (image === "null" || image === "undefined") {
    return NextResponse.json({
      status: "failedData",
      message: "لطفا عکس را بارگذاری کنید",
    });
  }
  if (!discount) {
    discount = 0;
  }

  try {
    await connectDB();

    const allProducts = await Ad.find();
    const checkCode = allProducts.some((item) => item.code === Number(code));
    console.log(checkCode)
    if (checkCode) {
      return NextResponse.json({
        status: "failedData",
        message: "این کد کالا قبلا ثبت شده است"
      });
    }

    const buffer = await image.arrayBuffer();
    const base64 = Buffer.from(buffer).toString("base64");
    const dataUri = `data:${image.type};base64,${base64}`;

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
      features,
      PublisherEmail: email,
      PubliasherName : name , 
      category,

    });

    return NextResponse.json({ status: "success", ad: newAd});
  } catch (err) {
    return NextResponse.json(
      { status: "failed", error: err.message },
      { status: 500 }
    );
  }
}
