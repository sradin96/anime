import { IoMdSearch } from "react-icons/io";
import { genres, years } from "../../../consts/consts";
import "./index.scss";
import { useState } from "react";

function Filters() {
    const query = new URLSearchParams(window.location.search);
    const single: any = query.get('search');
    const [searchValue, setSearchValue] = useState(
        single ?? ''
    );

    const handleSearch = (e: any) => {
        setSearchValue(e.target.value)
    }

  return (
    <div className="filters">
      <div className="filters__block filters__block--search">
        <IoMdSearch className="filters__search-icon" />
        <input value={searchValue} type="text" className="filters__search" placeholder="Search" onChange={(e) => handleSearch(e)} />
      </div>
      <div className="filters__block">
        <select className="filters__select" name="genres" id="genres">
            <option value="Any">Any</option>
            {
                genres.map((genre: any, index: number) => {
                    return <option value={genre.genre} key={index}>{genre.genre}</option>
                })
            }
        </select>
      </div>
      <div className="filters__block">
      <select className="filters__select" name="years" id="years">
            <option value="Any">Any</option>
            {
                years.map((year: any, index: number) => {
                    return <option value={year.year} key={index}>{year.year}</option>
                })
            }
        </select>
      </div>
    </div>
  )
}

export default Filters
