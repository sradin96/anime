import { Link } from "react-router-dom";
import "./index.scss";
import { Anime } from "../../../types/types";

interface AnimeProp {
  anime: Anime
}

const AnimeCard = ({ anime }: AnimeProp) => {
  return (
    <Link to="" className="anime-card">
      <div className="anime-card__img-holder">
        <img src={anime.coverImage.extraLarge} alt="" className="anime-card__img" />
      </div>
      <h2 className="anime-card__title">{anime.title.english || anime.title.romaji || anime.title.native}</h2>
    </Link>
  )
}

export default AnimeCard