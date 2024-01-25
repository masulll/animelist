"use client";
import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import Pagination from "@/components/utilities/Pagination";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const populerAnime = await getAnimeResponse("top/anime", `page=${page}`);

    setTopAnime(populerAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`POPULAR ANIME #${page}`} />
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
