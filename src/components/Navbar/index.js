import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="bg bg-indigo-500">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
        <Link href={"/"} className="font-bold text-white text-2xl">
          CUYANIMELIST
        </Link>
        <input placeholder="cari anime apa" />
      </div>
    </header>
  );
};
