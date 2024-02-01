import prisma from "@/libs/prisma";

const CommentBox = async ({ mal_id }) => {
  const comments = await prisma.comment.findMany({ where: { mal_id } });

  return (
    <div className="text-color-primary grid grid-cols-4 gap-4 py-3">
      {comments.map((comment) => {
        return (
          <div
            key={comment.id}
            className=" border border-color-warning bg-color-secondary rounded-xl p-2"
          >
            <p className="text-color-warning">{comment.username}</p>
            <p>{comment.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CommentBox;
