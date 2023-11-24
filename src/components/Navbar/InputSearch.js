// define client side rendering
"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = searchRef.current.value;
    router.push(`/search/${keyword}`);
  };

  return (
    <div className="relative">
      <form onSubmit={handleSearch}>
        <input
          placeholder="cari anime apa"
          className="w-full p-2 rounded"
          // cara lain selain onchange
          ref={searchRef}
        />
        <button className="absolute top-2 end-2" onClick={handleSearch}>
          <MagnifyingGlass size={24} />
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
