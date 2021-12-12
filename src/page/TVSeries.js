import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './../css/home.css';

import Nav from './../component/Nav';
import Menu from './../component/Menu';
import CardMovie from './../component/CardMovie';

function TVSeries({ featured, newMovie, tvNew }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // custom slider featured
  const customSliderFeatured = useRef(null);
  const nextFeatured = () => {
    customSliderFeatured.current.slickNext();
  };
  const history = useHistory();
  // custom slider featured

  const _handleDetail = (item) => {
    console.log(item);
    axios({
      url: `https://api.themoviedb.org/3/movie/${item.id}?api_key=04a9ec5cdd2c8b4ee1d83b7fe5b2a1c7&append_to_response=videos,images,credits,release_dates`,
      method: 'GET',
    })
      .then((res) => {
        console.log(res);
        history.push({ pathname: `/detail/${item.id}` });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <Menu open={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <div id="section-main" className="section-main">
        <Nav showSearch={true} setIsMenuOpen={setIsMenuOpen} />

        <div className="section-new">
          <h3>All TV Series</h3>
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

export default TVSeries;
