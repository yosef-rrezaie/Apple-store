import MainProducts from "@/components/modules/MainProducts";
import { connectDB } from "@/utils/DB/connectDB";
import Ad from "@/utils/DB/modelAd";

async function page({ searchParams }) {
  const category = searchParams.category || "all";
  const sort = searchParams.sort || "expensive";
  const search = searchParams.search || "";
  console.log(sort);
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
    if (sort === "expensive") {
      sortOptions.price = -1;
    } else if (sort === "cheap") {
      sortOptions.price = -1;
    }  else if (sort === "latest") {
      sortOptions.createdAt = -1;
    }

    const products = await Ad.find(filter).sort(sortOptions)
    

  } catch (err) {
    console.log(err);
  }
  return <MainProducts />;
}

export default page;
