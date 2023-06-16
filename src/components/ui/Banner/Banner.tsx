import { useQuery } from "@apollo/client";
import SPECIFIC_QUERY from "../../../graphql/getSpecific";
import "./index.scss";
import { NavLink } from "react-router-dom";

const Banner = () => {
  const { data }: any = useQuery(SPECIFIC_QUERY, {
    variables: {
      id: 1,
    },
  });

  return (
    <div className="banner">
      <div className="wrap wrap--small">
        <div className="banner__holder">
          <div className="banner__content">
            <h1 className="banner__title">Should Watch</h1>
            <h2 className="banner__subtitle">
              {data?.Media.title.english ||
                data?.Media.title.native ||
                data?.Media.title.romaji}
            </h2>
            <p className="banner__text">{data?.Media.description}</p>
            <ul className="banner__list">
              {data?.Media.genres.map((genre: any, index: number) => {
                return (
                  <li className="banner__item" key={index}>
                    <span className="banner__tag">
                      {genre}
                    </span>
                  </li>
                );
              })}
            </ul>
            <NavLink className="banner__link link" to={`/anime/${data?.Media.id}`}>Check it out</NavLink>
          </div>
          <div className="banner__img-holder">
            <img
              src={data?.Media.coverImage.extraLarge}
              alt=""
              className="banner__img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
