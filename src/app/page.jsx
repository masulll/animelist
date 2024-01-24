import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, reproduce } from "@/libs/api-libs";
import { getNestedAnimeResponse } from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );

  recommendedAnime = await reproduce(recommendedAnime, 4);
  // console.log(recommendedAnime);

  let seasonsAnime = await getAnimeResponse("seasons/now", "limit=8");

  return (
    <>
      <section>
        <Header
          title="Most Popular"
          linkTitle="Look More..."
          linkHref="/populer"
        />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Recommendation From Us" linkTitle="" linkHref="/new" />
        <AnimeList api={recommendedAnime} />
      </section>
      <section>
        <Header
          title="Coming this season"
          linkTitle="Follow More..."
          linkHref="/currentseason"
        />
        <AnimeList api={seasonsAnime} />
      </section>
    </>
  );
};

export default Page;
