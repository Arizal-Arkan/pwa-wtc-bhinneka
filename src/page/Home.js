import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import './../css/home.css';
import Slider from 'react-slick';

import SectionHero from './../component/SectionHero';
import CardMovie from './../component/CardMovie';

function Home({ featured, newMovie, tvNew }) {
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
      method: "GET",
    })
      .then(res => {
        console.log(res);
        history.push({ pathname: `/detail/${item.id}` });
      })
      .catch(err => {
        console.error(err);
      })
  }

  console.log(featured);

  const sliderFeaturedSetting = {
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <SectionHero isDetail={false} />

      <div id="section-main" className="section-main">
        <div className="card-featured">
          <h3>Featured</h3>

          <div className="slider-featured-frame">
            <Slider
              ref={customSliderFeatured}
              className="slider-featured"
              {...sliderFeaturedSetting}
            >
              {featured && featured.map((val, i) => {
                return (
                  <CardMovie margin="0px 12px" items={val} propKey={i} detailMov={() => _handleDetail(val)}/>
                );
              })}
            </Slider>

            <button
              class="button-glass button-glass-circle"
              onClick={nextFeatured}
            >
              <div className="icon">
                <span class="material-icons">chevron_right</span>
              </div>
            </button>
          </div>
        </div>

        <div className="section-new">
          <h3>New Release</h3>
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
            {newMovie && newMovie.map((val, i) => {
                return i < 12 ? ( 
                  <CardMovie margin="0px 12px" items={val} propKey={i}/>
                ) : false;
              })}
          </div>
        </div>

        <div className="section-new">
          <h3>Tv New Release</h3>
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
            {tvNew && tvNew.map((val, i) => {
                return i < 12 ? (
                  <CardMovie margin="0px 12px" items={val} propKey={i}/>
                ) : false 
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
