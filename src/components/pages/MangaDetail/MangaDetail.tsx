import { useNavigate, useParams } from "react-router-dom";
import "./index.scss";
import { useQuery } from "@apollo/client";
import SPECIFIC_MANGA_QUERY from "../../../graphql/getSpecificManga";

const MangaDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data }: any = useQuery(SPECIFIC_MANGA_QUERY, {
        variables: {
          id: id,
        },
      });

    const handleBackBtn = () => {
        navigate(-1);
    }

  return (
    <main className='main'>
      <div className="wrap">
        <button className="go-back-btn btn" type='button' onClick={handleBackBtn}>Go Back</button>
        <div className="anime-detail">
            <div className="anime-detail__img-holder">
                <img src={data?.Media.coverImage.extraLarge} alt="" className="anime-detail__img" />
            </div>
            <div className="anime-detail__content">
                <div className="anime-detail__head">
                    <h1 className="anime-detail__title">{data?.Media.title.english || data?.Media.title.native || data?.Media.title.romaji}</h1>
                    <span className="anime-detail__episodes">Chapters: {data?.Media.chapters}</span>
                </div>
                <div className="anime-detail__tags">
                    {
                        data?.Media.genres.map((genre: any, index: number) => {
                            return <span className="anime-detail__tag tag" key={index}>{genre}</span>
                        })
                    }
                </div>
                <span className="anime-detail__date">Start Date: {data?.Media.startDate.year}</span>
                <p className="anime-detail__description">{data?.Media.description}</p>
                <span className="anime-detail__native">Native: <span className="anime-detail__native--red">{data?.Media.title.native}</span></span>
                <span className="anime-detail__rank">{data?.Media.rankings.rank}</span>
            </div>
        </div>
      </div>
    </main>
  )
}

export default MangaDetail
