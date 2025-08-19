import Image from "next/image";
import { FaCommentAlt } from "react-icons/fa";

function CommentUser({ data }) {
  const filteredComments = data.comments.filter(
    (item) => item.published === true
  );
  console.log("filteredComments", filteredComments);

  return (
    <div className={` gap-4 grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 ${filteredComments.length ? "grid" : "block"} `}>
      {filteredComments.length ? (
        filteredComments.map((comment) => (
          <div
            key={comment._id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center gap-3 hover:shadow-xl transition"
          >
            {comment.productImage && (
              <Image
                src={comment.productImage}
                width={1000}
                height={1000}
                alt={comment.productTitle || "Product Image"}
                className="w-24 h-24 object-cover rounded-md"
              />
            )}
            <p className="text-gray-800 font-semibold text-center">
              {comment.title || "بدون عنوان"}
            </p>
          </div>
        ))
      ) : (
        <div className=" h-[300px] w-full flex flex-col gap-4  justify-center items-center">
          <p className=" text-center font-semibold">شما تا کنون نظری ثبت نکرده اید</p>
          <FaCommentAlt className="text-primary text-6xl" />
        </div>
      )}
    </div>
  );
}

export default CommentUser;
