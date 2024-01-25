"use client";
import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import Pagination from "@/components/utilities/Pagination";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = () => {
  const [page, setPage] = useState(1);
  const [seasonsAnime, setSeasonsAnime] = useState([]);

  const fetchData = async () => {
    const recentAnime = await getAnimeResponse("seasons/now", `page=${page}`);

    setSeasonsAnime(recentAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`THIS SEASON ANIME  #${page}`} />
      <div>
        <AnimeList api={seasonsAnime} />
      </div>
      <Pagination
        page={page}
        // simple way to state management but not recommended
        setPage={setPage}
        lastPage={seasonsAnime.pagination?.last_visible_page}
      />
    </>
  );
};

export default Page;
