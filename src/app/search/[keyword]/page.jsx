// "use client";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = async ({ params }) => {
  // destruct params {keyword}
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);
  console.log(keyword);

  const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`);

  return (
    <>
      <section>
        <Header
          title={`Pencarian untuk ${decodeKeyword}...`}
          linkTitle=""
          linkHref=""
        />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
