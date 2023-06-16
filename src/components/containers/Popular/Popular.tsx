import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import "./index.scss";
import { Anime } from "../../../graphql/getAnimes";
import POPULAR_ANIME_QUERY from "../../../graphql/getPopular";
import { NavLink } from "react-router-dom";

const Popular = () => {
  const [perPage, setPerPage] = useState(10);
  const { loading, data }: any = useQuery(POPULAR_ANIME_QUERY, {
    variables: {
      page: 1,
      perPage: perPage
    },
  });

  useEffect(() => {
    if (data && data.Page && data.Page.media) {
      setMedia(data.Page.media);
    }
  }, [data]);

  const handleLoadMore = () => {
    setPerPage(prevPerPage => prevPerPage + 10); // Update perPage state first
  };

  const [media, setMedia] = useState<Anime[]>([]);

  const [hoveredCardIndex, setHoveredCardIndex] = useState<number>(-1);
  const [popupDirection, setPopupDirection] = useState<string>('')

  const handleCardPopup = (index: number, event: any) => {
    setHoveredCardIndex(index);

    const cardRect = event.currentTarget.getBoundingClientRect();
    const { right } = cardRect;
    const screenWidth = window.innerWidth;

    if (right > screenWidth - 300) {
      setPopupDirection('right');
    } else {
      setPopupDirection('');
    }
  };

  return (
    <>
      <div className="popular">
        <div className="wrap">
          <h2 className="popular__title">Trending Now</h2>
          <div className="popular__holder">
            {media.map((anime: any, index: number) => {
              return (
                <NavLink to={`anime/${anime.id}`} className={`popular__card ${popupDirection}`}
                key={index}
                onMouseOver={(event) => handleCardPopup(index, event)}
                onMouseLeave={(event) => handleCardPopup(-1, event)}
                >
                <div className="popular__card-img-holder">
                  <img src={anime.coverImage.extraLarge} alt="" className="popular__card-img" />
                </div>
                <h3 className="popular__card-title">
                  {anime.title.english || anime.title.romaji || anime.title.native}
                </h3>
                {
                  index === hoveredCardIndex && (
                  <div className="popular__card-popup">
                    <h4 className="popular__card-popup-rank">All Time Ranking: {anime.rankings[0].rank}</h4>
                    <span className="popular__card-popup-date">{anime.startDate.year}</span>
                    <div className="popular__card-popup-holder">
                      <span className="popular__card-popup-text">TV Show</span>
                      <span className="popular__card-popup-episodes">{anime.episodes} episodes</span>
                    </div>
                    <div className="popular__card-popup-tags tags">{
                      anime.genres.slice(0, 3).map((genre: any, index: number) => {
                        return <span className="popular__card-popup-tag" key={index}>
                          {genre}
                        </span>
                      })
                    }</div>
                  </div>
                  )
                }
              </NavLink>
              )
            })}
          </div>
          {loading && <p className="popular__loading">Loading...</p>}
          {data?.Page.pageInfo.hasNextPage && (
            <div className="popular__btn-holder">
              <button className="popular__load-more btn btn--red" onClick={handleLoadMore}>
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Popular;
