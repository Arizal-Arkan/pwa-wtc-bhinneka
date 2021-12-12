import React, { useRef, useState } from 'react';
import './../css/home.css';

import Nav from './../component/Nav';
import Menu from './../component/Menu';
import CardMovie from './../component/CardMovie';

function WatchList({ featured, newMovie, tvNew }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Menu open={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <div id="section-main" className="section-main">
        <Nav showSearch={true} setIsMenuOpen={setIsMenuOpen} />

        <div className="justify-between mt-28 mb-10 flex bg-gray-800 m-auto p-8 items-center rounded-3xl text-white">
          <div className="flex gap-5 items-center">
            <div>
              {' '}
              <img
                className="rounded-xl"
                src="./images/content/keanu.png"
                alt=""
              />{' '}
            </div>
            <div>
              <h2 className="text-lg font-semibold">Jhon Thor</h2>{' '}
              <p className="opacity-40">Movie Enthusiastic</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="material-icons">bookmark</span>
            <p> 54 Watchlist </p>
          </div>
        </div>

        <div className="section-new">
          <h3>My Watchlist</h3>
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

export default WatchList;
