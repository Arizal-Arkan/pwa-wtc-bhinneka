import './Nav.css';

import FormSearch from './../FormSearch';

function Nav(props) {
  const { showSearch } = props;
  console.log('showSearch', showSearch);
  return (
    <>
      <nav>
        <div className="left-nav">
          <button class="button-glass button-glass-icon">
            <span class="material-icons">notes</span>
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
