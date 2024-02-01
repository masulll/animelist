import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import { Divide, Key } from "@phosphor-icons/react";
import Link from "next/link";

const page = async () => {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  });

  return (
    <section className="mt-4 px-4 w-full ">
      <Header title={"My Comments"} />
      <div className="grid grid-cols-1  gap-4">
        {comments.map((comment) => {
          return (
            <Link
              key={comment.id}
              href={`/anime/${comment.mal_id}`}
              className="bg-color-secondary rounded text-color-primary p-4  hover:border border-color-warning transition-all"
            >
              <p className="text-md font-semibold">{comment.anime_title}</p>
              <p className="italic">{comment.comment}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default page;
