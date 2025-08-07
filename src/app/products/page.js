import MainProducts from "@/components/modules/MainProducts";
import { connectDB } from "@/utils/DB/connectDB";
import Ad from "@/utils/DB/modelAd";

async function page({ searchParams }) {
  const category = searchParams.category || "همه";
  const sort = searchParams.sort || "101";
  const search = searchParams.search || "";
  try {
    await connectDB();
    const filter = {};
    if (category !== "همه") {
      filter.category = category;
    }
    if (search.trim !== "") {
      filter.title = { $regex: search, $options: "i" };
    }

    const sortOptions = {};
    if (sort === "101") {
      sortOptions.price = +1;
    } else if (sort === "102") {
      sortOptions.price = -1;
    } else if (sort === "103") {
      sortOptions.createdAt = -1;
    }
     else if (sort === "104") {
      sortOptions.createdAt = +1;
    }

    const products = await Ad.find(filter).sort(sortOptions);
    console.log(products);
  } catch (err) {
    console.log(err);
  }
  return <MainProducts />;
}

export default page;
