// "use client";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async () => {
  // use & to more params
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const topAnime = await response.json();

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
        <Header
          title="Paling Baru"
          linkTitle="Ikuti Sekarang"
          linkHref="/new"
        />
        <AnimeList api={topAnime} />
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
