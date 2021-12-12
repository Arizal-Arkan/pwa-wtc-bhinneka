import './Nav.css';

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
          <span className="logo">
            Watch<b>Lur</b>
          </span>
        </div>
        {showSearch ? <FormSearch /> : ''}
      </nav>
    </>
  );
}

export default Nav;
