import { Link } from "react-router-dom";
import "./index.scss";

const AnimeCard = ({ anime }: any) => {
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
