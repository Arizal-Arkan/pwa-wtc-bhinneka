import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './../css/home.css';

import Nav from './../component/Nav';
import Menu from './../component/Menu';
import CardMovie from './../component/CardMovie';

function Movies({ featured, newMovie, tvNew }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const history = useHistory();

  console.log('history', history);

  return (
    <>
      <Menu open={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <div id="section-main" className="section-main">
        <Nav showSearch={true} setIsMenuOpen={setIsMenuOpen} />

        <div className="section-new">
          <h3>All Movies</h3>
          <div
            className="
              grid gap-4 
              xl:grid-cols-6 
              lg:grid-cols-5 
              md:grid-cols-4 
              sm:grid-cols-3
              grid-cols-2
            "
          >
            {/* {newMovie &&
              newMovie.map((val, i) => {
                return i < 12 ? (
                  <CardMovie margin="0px 12px" items={val} propKey={i} />
                ) : (
                  false
                );
              })} */}
            <CardMovie />
            <CardMovie />
            <CardMovie />
            <CardMovie />
            <CardMovie />
            <CardMovie />
            <CardMovie />
            <CardMovie />
            <CardMovie />
            <CardMovie />
            <CardMovie />
            <CardMovie />
          </div>
        </div>
      </div>
    </>
  );
}

export default Movies;
