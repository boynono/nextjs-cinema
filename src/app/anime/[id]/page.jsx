import { getAnimeResponse } from "@/app/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import React from "react";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  console.log(anime);
  return (
    <>
      <div className='pt-4 px-4'>
        <h3 className='text-2xl text-color-primary'>
          Anime {anime.data.title} {anime.data.year}
        </h3>
      </div>
      <div className='pt-4 px-4 flex gap-4 text-color-primary overflow-x-auto'>
        <div className='p-2 w-36 flex flex-col justify-center items-center rounderd border border-color-primary '>
          <h3>PERINGKAT</h3>
          <p>{anime.data.rank}</p>
        </div>
        <div className='p-2 w-36 flex flex-col justify-center items-center rounderd border border-color-primary'>
          <h3>SKOR</h3>
          <p>{anime.data.score}</p>
        </div>
        <div className='p-2 w-36 flex flex-col justify-center items-center rounderd border border-color-primary '>
          <h3>EPISODE</h3>
          <p>{anime.data.episodes}</p>
        </div>
        <div className='p-2 w-36 flex flex-col justify-center items-center rounderd border border-color-primary'>
          <h3>PUPOLARITY</h3>
          <p>{anime.data.popularity}</p>
        </div>
      </div>
      <div className=' to-color-primary px-4 pt-4 flex flex-col sm:flex-row gap flex-wrap sm:flex-nowrap'>
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={250}
          height={250}
          className='w-full rounded object-cover'
        />
        <div className='flex flex-col px-4 gap-8'>
          <h2 className='text-xl text-color-primary text-justify '>
            {anime.data.background}
          </h2>
          <p className='text-m text-color-primary text-justify'>
            {anime.data.synopsis}
          </p>
        </div>
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
