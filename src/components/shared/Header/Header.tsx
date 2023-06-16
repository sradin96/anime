import { NavLink } from 'react-router-dom'
import './index.scss'
import { IoMdSearch } from "react-icons/io";

const Header = ({ modalOpen, setModalOpen }: any) => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="header__holder">
            <NavLink to="/" className="header__home">Anime</NavLink>
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item">
                        <NavLink to='/' className='header__link'>Home</NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink to='/animes' className='header__link'>Anime List</NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink to='/mangas' className='header__link'>Manga List</NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink to='/' className='header__link'>Browse</NavLink>
                    </li>
                </ul>
            </nav>
            <button className="header__search" type='button' onClick={() => setModalOpen(!modalOpen)}>
                <IoMdSearch />
            </button>
        </div>
      </div>
    </header>
  )
}

export default Header
