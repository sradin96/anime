import Filters from "../../containers/Filters/Filters";
import AnimeCard from "../../ui/AnimeCard/AnimeCard";
import "./index.scss";

const AnimeList = () => {
  return (
    <main className="main">
      <div className="wrap">
        <Filters />
        <AnimeCard />
      </div>
    </main>
  )
}

export default AnimeList
