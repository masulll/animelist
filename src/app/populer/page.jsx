"use client";
import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import Pagination from "@/components/utilities/Pagination";
import { useEffect, useState } from "react";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
    );
    const data = await response.json();

    setTopAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
      <div>
        <AnimeList api={topAnime} />
      </div>
      <Pagination
        page={page}
        // simple way to state management but not recommended
        setPage={setPage}
        lastPage={topAnime.pagination?.last_visible_page}
      />
    </>
  );
};

export default Page;
