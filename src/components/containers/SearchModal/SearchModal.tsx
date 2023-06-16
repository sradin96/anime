import { NavLink } from "react-router-dom";
import "./index.scss";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import { IoMdSearch, IoMdClose } from "react-icons/io";
import { useState } from "react";
import ANIME_QUERY from "../../../graphql/getAnimes";
import { useLazyQuery } from "@apollo/client";
import MANGA_QUERY from "../../../graphql/getMangas";

function SearchModal({ modalOpen, setModalOpen }: any) {
    const [inputValue, setInputValue] = useState('');
    const [searchAnime, { loading: animeLoading, error: animeError, data: animeData }] = useLazyQuery(ANIME_QUERY);
    const [searchManga, { loading: mangaLoading, error: mangaError, data: mangaData }] = useLazyQuery(MANGA_QUERY);

    if (!modalOpen) return null;

    const clearSearchInput = () => {
        setInputValue('')
    }

    const handleSearchModal = () => {
        setModalOpen(!modalOpen)
        setInputValue('')
    }

    const handleSearchInput = (e: any) => {
        setInputValue(e.target.value)
        searchAnime({
            variables: {
              search: e.target.value,
              page: 1,
              perPage: 10
            }
          });
        searchManga({
            variables: {
                search: e.target.value,
                page: 1,
                perPage: 10
            }
        });
    }

  return (
    <div className='search-popup'>
        <div className="search-popup__top">
            <div className="wrap">
                <div className="search-popup__top-holder">
                    <NavLink to="/" className="search-popup__link">Anime</NavLink>
                    <button className="search-popup__exit" type="button"
                    onClick={handleSearchModal}
                    >
                        <AiOutlineFullscreenExit />
                    </button>
                </div>
            </div>
        </div>
        <div className="search-popup__holder">
            <div className="wrap">
                <div className="search-popup__input-holder">
                    <div className="search-popup__input-icon">
                        <IoMdSearch />
                    </div>
                    <input value={inputValue}
                    type="text"
                    placeholder="Search Anime"
                    className="search-popup__input"
                    onChange={(e) => {handleSearchInput(e)}}
                    />
                    <button className="search-popup__input-clear" type="button" onClick={clearSearchInput}>
                        <IoMdClose />
                    </button>
                </div>
                {
                inputValue.length &&
                <div className="search-popup__results">
                    <div className="search-popup__result">
                        {animeData && (
                        <ul className="search-popup__result-list">
                            {animeData.Page.media.map((anime: any) => (
                            <li className="search-popup__result-item" key={anime.id}>
                                <NavLink onClick={handleSearchModal} to={`/anime/${anime.id}`} className="search-popup__result-block">
                                    <div className="search-popup__result-img-block">
                                        <img src={anime.coverImage.extraLarge} alt="" className="search-popup__result-img" />
                                    </div>
                                    <div className="search-popup__result-content">
                                        <h4 className="search-popup__result-title">{anime.title.english || anime.title.romaji || anime.title.native}</h4>
                                        <span className="search-popup__result-year">{anime.startDate.year}</span>
                                    </div>
                                </NavLink>
                            </li>
                            ))}
                        </ul>
                        )}
                        <NavLink to="/animes" className="search-popup__result-link">View all animes</NavLink>
                    </div>
                    <div className="search-popup__result">
                        {mangaData && (
                        <ul>
                            {mangaData.Page.media.map((manga: any) => (
                            <li key={manga.id}>
                                <NavLink onClick={handleSearchModal} to={`/manga/${manga.id}`} className="search-popup__result-block">
                                    <div className="search-popup__result-img-block">
                                        <img src={manga.coverImage.extraLarge} alt="" className="search-popup__result-img" />
                                    </div>
                                    <div className="search-popup__result-content">
                                        <h4 className="search-popup__result-title">{manga.title.english || manga.title.romaji || manga.title.native}</h4>
                                        <span className="search-popup__result-year">{manga.startDate.year}</span>
                                    </div>
                                </NavLink>
                            </li>
                            ))}
                        </ul>
                        )}
                        <NavLink to="/mangas" className="search-popup__result-link">View all mangas</NavLink>
                    </div>
                </div>
                }
            </div>
        </div>
    </div>
  )
}

export default SearchModal
