import { connectDB } from "@/utils/DB/connectDB";
import Ad from "@/utils/DB/modelAd";

export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category") || "همه";
    const sort = searchParams.get("sort") || "101";
    const search = searchParams.get("search") || "";

    const filter = {};
    if (category !== "همه") {
      filter.category = category;
    }
    if (search.trim() !== "") {
      filter.title = { $regex: search, $options: "i" };
    }

    const sortOptions = {};
    if (sort === "101") sortOptions.price = 1;
    else if (sort === "102") sortOptions.price = -1;
    else if (sort === "103") sortOptions.createdAt = -1;
    else if (sort === "104") sortOptions.createdAt = 1;

    const products = await Ad.find(filter).sort(sortOptions);

    return new Response(JSON.stringify(products), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Server Error" }), { status: 500 });
  }
}
