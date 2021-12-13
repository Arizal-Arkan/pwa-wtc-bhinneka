import './Nav.css';
import { Link } from 'react-router-dom'

import FormSearch from './../FormSearch';

function Nav(props) {
  const { showSearch, setIsMenuOpen } = props;
  return (
    <>
      <nav>
        <div className="left-nav">
          <button
            className="button-glass button-glass-icon"
            onClick={() => setIsMenuOpen(true)}
          >
            <span className="material-icons">notes</span>
          </button>
          <Link to={'/'} className="logo">
            Watch<b>Lur</b>
          </Link>
        </div>
        {showSearch ? <FormSearch /> : ''}
      </nav>
    </>
  );
}

export default Nav;
