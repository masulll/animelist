import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold text-color-warning">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="md:text-lg text-md font-regular hover:text-color-warning text-color-primary transition-all underline"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
