import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Dashboard/Header";
import prisma from "@/libs/prisma";
import { authUserSession } from "@/libs/auth-libs";

const page = async () => {
  const user = await authUserSession();

  const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
  });

  return (
    <section className="mt-4 px-4 w-full ">
      <Header title={"My Collection"} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {collection.map((collect, index) => {
          return (
            <Link
              key={index}
              href={`/anime/${collect.mal_id}`}
              className="relative "
            >
              <Image
                src={collect.anime_img}
                width={350}
                height={350}
                alt=""
                className="-color-warning w-full"
              />
              <div className="absolute flex justify-center bottom-0 w-full bg-color-warning h-16 ">
                <h5 className="text-xl text-center">{collect.anime_title}</h5>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default page;
