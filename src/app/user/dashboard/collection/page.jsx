import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Dashboard/Header";

const page = () => {
  return (
    <section className="mt-4 px-4 w-full ">
      <Header title={"My Collection"} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Link href={"/"} className="relative border-2 border-color-warning">
          <Image
            src=""
            width={350}
            height={350}
            alt=""
            className="-color-warning w-full"
          />
          <div className="absolute flex justify-center bottom-0 w-full bg-color-warning relative h-16 ">
            <h5 className="text-xl text-center">JUDUL ANIME</h5>
          </div>
        </Link>
        <Link href={"/"} className="relative border-2 border-color-warning">
          <Image
            src=""
            width={350}
            height={350}
            alt=""
            className="-color-warning w-full"
          />
          <div className="absolute flex justify-center bottom-0 w-full bg-color-warning relative h-16 ">
            <h5 className="text-xl text-center">JUDUL ANIME</h5>
          </div>
        </Link>
        <Link href={"/"} className="relative border-2 border-color-warning">
          <Image
            src=""
            width={350}
            height={350}
            alt=""
            className="-color-warning w-full"
          />
          <div className="absolute flex justify-center bottom-0 w-full bg-color-warning relative h-16 ">
            <h5 className="text-xl text-center">JUDUL ANIME</h5>
          </div>
        </Link>
        <Link href={"/"} className="relative border-2 border-color-warning">
          <Image
            src=""
            width={350}
            height={350}
            alt=""
            className="-color-warning w-full"
          />
          <div className="absolute flex justify-center bottom-0 w-full bg-color-warning relative h-16 ">
            <h5 className="text-xl text-center">JUDUL ANIME</h5>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default page;
