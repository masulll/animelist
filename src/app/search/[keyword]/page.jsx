// "use client";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  // destruct params {keyword}
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);
  console.log(keyword);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodeKeyword}`
  );
  const searchAnime = await response.json();

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
