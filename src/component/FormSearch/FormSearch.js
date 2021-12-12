import { useState } from 'react';
import './FormSearch.css';

function FormSearch(props) {
  const { width } = props;

  const [search, setSearch] = useState('');
  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };
  const handleSubmitSearch = (event) => {
    event.preventDefault();
    console.log('lol', search);
  };

  return (
    <>
      <form
        className="form-search"
        onSubmit={handleSubmitSearch}
        style={{
          width: width || 'unset',
        }}
      >
        <input
          type="text"
          value={search}
          onChange={(event) => handleChangeSearch(event)}
          placeholder="Search..."
        />
        <button type="submit">
          <span className="material-icons">search</span>
        </button>
      </form>
    </>
  );
}

export default FormSearch;
