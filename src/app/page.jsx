import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/libs/api-libs";
import { getNestedAnimeResponse } from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );

  const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  shuffle(recommendedAnime);
  recommendedAnime = { data: recommendedAnime.slice(0, 4) };
  console.log(recommendedAnime);
  return (
    <>
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
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
          title="Paling Rame"
          linkTitle="Ikuti Sekarang"
          linkHref="/rame"
        />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;
