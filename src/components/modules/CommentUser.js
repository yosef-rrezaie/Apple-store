import Image from "next/image";

function CommentUser({ data }) {
  const filteredComments = data.comments.filter(
    (item) => item.published === true
  );

  return (
    <div className="grid gap-4 grid-cols-1  lg:grid-cols-2 xl:grid-cols-3">
      {filteredComments.map((comment) => (
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
      ))}
    </div>
  );
}

export default CommentUser;
