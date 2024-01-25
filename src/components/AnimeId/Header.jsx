"use client";

import { ArrowSquareLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const handleBack = (event) => {
    event.preventDefault();
    router.back();
  };
  return (
    <div>
      <button className="text-color-primary" onClick={handleBack}>
        <ArrowSquareLeft size={32} />
      </button>
    </div>
  );
};

export default Header;
