"use client";
import Image from "next/image";
import { MdInfoOutline } from "react-icons/md";
import useSWR from "swr";

function AdComments() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading, mutate } = useSWR(
    "/api/showComments",
    fetcher
  );
  console.log(data);

  async function approveComment(productId, commentId, email) {
    const res = await fetch("/api/showComments", {
      method: "POST",
      body: JSON.stringify({ productId, commentId, email }),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    if (result.status === "success") mutate();
  }

  async function deleteComment(productId, commentId, email) {
    const res = await fetch("/api/showComments", {
      method: "DELETE",
      body: JSON.stringify({ productId, commentId, email }),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    if (result.status === "success") mutate();
  }
  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-7 h-7 md:w-9 md:h-9 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  if (!data.data.length)
    return (
      <div className = "min-h-screen justify-center flex items-center">
        <div className="text-center text-gray-500 py-6 flex flex-col items-center gap-2">
          <MdInfoOutline size={40} className="text-primary" />
          <p>نظری موجود نیست</p>
        </div>
      </div>
    );
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {data.data.map((product) =>
        product.comments.map((comment) => (
          <div
            key={comment._id}
            className="w-full bg-white rounded-lg shadow-md p-4 flex flex-col gap-4"
          >
            <div className="w-full flex justify-center">
              <Image
                src={product.imageUrl}
                width={1000}
                height={1000}
                alt={product.title}
                className="w-24 h-24 object-cover rounded-md"
              />
            </div>

            <div className="text-center">
              <p className="text-gray-800 font-medium">{comment.title}</p>
              <span className="text-sm text-gray-500">— {comment.name}</span>
            </div>

            <div className="flex gap-3 justify-between">
              <button
                className="bg-orange-500 text-white px-3 py-1 rounded-md text-sm hover:bg-orange-600 transition"
                onClick={() =>
                  approveComment(product._id, comment._id, comment.email)
                }
              >
                تایید
              </button>
              <button
                className="bg-orange-500 text-white px-3 py-1 rounded-md text-sm hover:bg-orange-600 transition"
                onClick={() =>
                  deleteComment(product._id, comment._id, comment.email)
                }
              >
                حذف
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default AdComments;
