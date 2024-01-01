"use client"
import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import React, { useEffect, useState } from "react";

const Page =  () => {
  const [page, setPage] = useState (2)
  const [topAnime, setTopAnime] = useState([])


  const fetchData = async () =>{
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
    );
    const data = await response.json();

    setTopAnime(data)

  }

  useEffect(()=>{
    fetchData()
  },[page])

  return <><HeaderMenu title={`Anime Populer #${page}`}/>
  <AnimeList dataApi={topAnime} />
  <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page } setPage={setPage}/></>
};

export default Page;
