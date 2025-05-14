import CategoriesComponent from "./CategoriesComponent";

const categoriesTitle = [
  { id: 1, title: "اپل واچ", img: "apple-watch" },
  { id: 2, title: "ایرپاد", img: "airpods" },
  { id: 3, title: "آیپد", img: "ipad" },
  { id: 4, title: "آیفون", img: "iphone" },
  { id: 5, title: "شارژر مگ سیف", img: "magsafe" },
  { id: 6, title: "هوم پاد", img: "homepod" },
  { id: 7, title: "اپل تی وی", img: "apple-tv" },
];
function Categories() {
  return (
    <div className=" flex flex-wrap gap-5 justify-center mt-[18px] lg:gap-17 lg:w-[1237px] lg:mx-auto
     lg:h-[131px] lg:items-center  lg:bg-[#FAFAFA] lg:rounded-2xl lg:mt-[27px]">
      {categoriesTitle.map((index) => (
        <CategoriesComponent
          key={index.id}
          title={index.title}
          img={index.img}
        />
      ))}
    </div>
  );
}

export default Categories;
