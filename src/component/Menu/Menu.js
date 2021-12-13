import './Menu.css';
import { Link } from 'react-router-dom';

import slide_2 from '../../slide_2.png';

function Menu(props) {
  const { open, setIsMenuOpen, posterMovie } = props;

  return (
    <>
      <div
        className="menu"
        style={{
          zIndex: open ? 99 : '-99',
          opacity: open ? 1 : 0,
          transform: open ? 'scale(1)' : 'scale(0.9)',
        }}
      >
        <div className="close-menu" onClick={() => setIsMenuOpen(false)}>
          <button className="button-glass button-glass-icon">
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className="menu-half menu-left">
          <img src={posterMovie !== undefined ? `https://image.tmdb.org/t/p/original${posterMovie}` : slide_2} alt="poster" />
        </div>
        <div className="menu-half menu-right">
          <Link to="/">
            <div className="menu-list active">
              <a href="/home">Home</a>
              <div className="icon">
                <span className="material-icons">arrow_forward</span>
              </div>
            </div>
          </Link>

          <Link to="/movies">
            <div className="menu-list">
              <a href="/movies">Movies</a>
              <div className="icon">
                <span className="material-icons">arrow_forward</span>
              </div>
            </div>
          </Link>

          {/* <Link to="/tv-series">
            <div className="menu-list">
              <a href="/tv-series">TV Series</a>
              <div className="icon">
                <span className="material-icons">arrow_forward</span>
              </div>
            </div>
          </Link> */}

          <Link to="/watchlist">
            <div className="menu-list">
              <a href="/watchlist">Watchlist</a>
              <div className="icon">
                <span className="material-icons">arrow_forward</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Menu;
