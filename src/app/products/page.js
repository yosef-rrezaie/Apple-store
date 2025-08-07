import MainProducts from "@/components/modules/MainProducts";
import { connectDB } from "@/utils/DB/connectDB";
import Ad from "@/utils/DB/modelAd";

async function page({ searchParams }) {
  const category = searchParams.category || "همه";
  const sort = searchParams.sort || "101";
  const search = searchParams.search || "";
  console.log(category , sort , search);
  try {
    await connectDB();
    const filter = {};
    if (category !== "all") {
      filter.category = category;
    }
    if (search.trim !== "") {
      filter.title = { $regex: search, $options: "i" };
    }

    const sortOptions = {};
    if (sort === "102") {
      sortOptions.price = -1;
    } else if (sort === "101") {
      sortOptions.price = -1;
    }  else if (sort === "103") {
      sortOptions.createdAt = -1;
    }

    const products = await Ad.find(filter).sort(sortOptions)
    

  } catch (err) {
    console.log(err);
  }
  return <MainProducts />;
}

export default page;
