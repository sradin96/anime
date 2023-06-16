import { useLazyQuery, useQuery } from "@apollo/client";
import Filters from "../../containers/Filters/Filters";
import AnimeCard from "../../ui/AnimeCard/AnimeCard";
import "./index.scss";
import ANIME_QUERY from "../../../graphql/getAnimes";
import { useState } from "react";

const AnimeList = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchAnime, { loading: animeLoading, error: animeError, data: animeData }] = useLazyQuery(ANIME_QUERY);

  const handleSearchInput = (e: any) => {
    setInputValue(e.target.value)
    searchAnime({
        variables: {
          search: e.target.value,
          page: 1,
          perPage: 10
        }
      });
  }

  return (
    <main className="main">
      <div className="wrap">
        <Filters inputValue={inputValue} setInputValue={setInputValue} handleSearchInput={handleSearchInput} />
        <div className="anime-list">
          {
            animeData?.Page.media.map((anime: any, index: number) => {
              return <AnimeCard anime={anime} key={index} />
            })
          }
        </div>
      </div>
    </main>
  )
}

export default AnimeList
