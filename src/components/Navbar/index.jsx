import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";

export const Navbar = () => {
  return (
    <header className="bg bg-color-accent sticky top-0 z-50">
      <div className="flex md:flex-row flex-col justify-between p-3 gap-2 md:items-center">
        <Link
          href={"/"}
          className="font-bold text-color-warning text-3xl italic"
        >
          ANISCORE
        </Link>
        <InputSearch />
        <UserActionButton />
      </div>
    </header>
  );
};
