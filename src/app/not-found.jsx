"use client";
import { FileSearch } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Page = () => {
  return (
    <div className=" max-w-xl min-h-screen mx-auto flex justify-center items-center">
      <div className=" flex justify-center items-center flex-col ">
        <FileSearch size={32} className="text-color-accent" />
        <h3 className="text-2xl font-bold text-color-accent ">NOT FOUND</h3>
        <Link
          href={"/"}
          className="text-color-primary underline hover:text-color-accent transition-all"
        >
          Kembali
        </Link>
      </div>
    </div>
  );
};

export default Page;
