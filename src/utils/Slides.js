import { disconnect } from "mongoose";

const allProducts = [
  {
    id: 1,
    src: "pc-laptop",
    title: "مک بوک ایر 13.6 اینچ M2 ظرفیت 8/256 گیگ مدل 2022",
    price: 75000000,
    discount : 5
  },
  {
    id: 2,
    src: "ipad",
    title: "آیپد پرو 11 اینچ M2 ظرفیت 128 گیگ",
    price: 45000000,
  },
  {
    id: 3,
    src: "nike-watch",
    title: "اپل واچ اولترا تیتانیومی با بند لوپ اورنج آلپاین",
    price: 50000000,
    discount : 13
  },
  {
    id:4 , 
    src: "airpadmax",
    title: "ایرپاد مکس هدفون بلوتوث اپل",
    price: 27800000,
  },
  {
    id:5 , 
    src: "iphone16",
    title: "ایرپاد مکس هدفون بلوتوث اپل",
    price: 27800000,
  },
  {
    id:6 ,
    src: "iphone14", 
    title: "ایرپاد مکس هدفون بلوتوث اپل",
    price: 27800000,
  },
];

const watchProducts = [
  {
    src: "ultra-watch",
    title: "اپل واچ سری 8 آلومینیوم میدنایت با بند اسپرت سیلیکون میدنایت",
    price: 30000000,
  },
  {
    src: "nike-watch",
    title: "اپل واچ اولترا تیتانیومی با بند لوپ اورنج آلپاین",
    price: 27800000,
    discount : 12.5
  },
  {
    src: "apple-watch",
    title: "اپل واچ اولترا تیتانیومی با بند اوشن میدنایت",
    price: 38000000,
  },
];

export { allProducts, watchProducts };
