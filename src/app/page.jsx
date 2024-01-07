import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "./libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");

  // const response1 = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  // );
  // const topAnime = await response1.json();

  // const response2 = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/manga?limit=8`
  // );
  // const manga = await response2.json();

  return (
    <>
      <section>
        <Header title='Populer' linkHref='/populer' linkTitle='selengkapnya' />
        <AnimeList dataApi={topAnime} />
      </section>

      {/* <section>
        <Header title='New' linkHref='/new' linkTitle='lihat' />
        <AnimeList dataApi={manga} />
      </section> */}
    </>
  );
};
export default Page;
