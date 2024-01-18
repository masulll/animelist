import { authUserSession } from "@/libs/auth-libs";
import { redirect } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
const page = async () => {
  const user = await authUserSession();

  return (
    <div className="text-color-primary mt-8 flex flex-col justify-center items-center">
      <h5 className="text-2xl font-bold ">Welcome, {user?.name} </h5>
      <Image
        src={user?.image}
        alt="picture"
        width={250}
        height={250}
        className="rounded rounded-full"
      />
      <div className="flex flex-wrap py-8 gap-4">
        <Link
          href={"/user/dashboard/collection"}
          className="bg-color-warning font-bold text-color-dark text-xl py-3 px-4 rounded rounded-md"
        >
          My Collections
        </Link>
        <Link
          href={"/user/dashboard/comment"}
          className="bg-color-warning font-bold text-color-dark text-xl py-3 px-4 rounded rounded-md"
        >
          My Comments
        </Link>
      </div>
    </div>
  );
};

export default page;
