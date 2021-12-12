import React, { useRef, useState, useEffect } from 'react';
import './../css/home.css';
import Slider from 'react-slick';
import CardHero from './../component/CardHero';
import CardMovie from './../component/CardMovie';
import FormSearch from './../component/FormSearch';

import slide_1 from '../slide_1.png';
import slide_2 from '../slide_2.png';

const sliderHero = [
  {
    id: '001',
    title: 'John Wick: Chapter 3 - Parabellum',
    imdb: '7.9',
    image: slide_1,
  },
  {
    id: '002',
    title: 'Dune',
    imdb: '6.9',
    image: slide_2,
  },
];

function DetailMovie() {
  const [currentSlideHero, setCurrentSlideHero] = useState(0);

  // custom slider hero
  const customSliderHero = useRef(null);
  const nextHero = () => {
    customSliderHero.current.slickNext();
  };
  const prevHero = () => {
    customSliderHero.current.slickPrev();
  };
  // custom slider hero

  // custom slider featured
  const customSliderFeatured = useRef(null);
  const nextFeatured = () => {
    customSliderFeatured.current.slickNext();
  };
  // custom slider featured

  const sliderHeroSetting = {
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setCurrentSlideHero(current);
    },
    afterChange: (current) => {
      setCurrentSlideHero(current);
    },
  };

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
      <div id="section-hero" className="section-hero">
        <Slider
          className="slider-hero"
          {...sliderHeroSetting}
          ref={customSliderHero}
        >
          {sliderHero?.map((item, index) => (
            <CardHero data={item} key={index} />
          ))}
        </Slider>
        <div className="overlay-hero">
          <nav>
            <div className="left-nav">
              <button class="button-glass button-glass-icon">
                <span class="material-icons">notes</span>
              </button>
              <span className="logo">
                Watch<b>Lur</b>
              </span>
            </div>
            <FormSearch />
          </nav>

          <div className="movie-info">
            <h1>{sliderHero[currentSlideHero]?.title}</h1>
            <div className="movie-score">
              <span>{sliderHero[currentSlideHero]?.imdb}</span>
              <span>/ 10</span>
            </div>
          </div>

          <div className="movie-action">
            <div className="user-action">
              <button class="button-glass button-glass-icon">
                <span class="material-icons">bookmark_border</span>
              </button>
              <button class="button-glass button-glass-text-icon ml-4">
                Watch Trailer
                <div className="icon">
                  <span class="material-icons">play_circle</span>
                </div>
              </button>
            </div>

            <div className="slider-action">
              <button class="button-glass button-glass-icon" onClick={prevHero}>
                <span class="material-icons">chevron_left</span>
              </button>
              <button
                class="button-glass button-glass-icon ml-2"
                onClick={nextHero}
              >
                <span class="material-icons">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="section-main" className="section-main">
        <div className="card-featured">
          <h3>Featured</h3>

          <div className="slider-featured-frame">
            <Slider
              ref={customSliderFeatured}
              className="slider-featured"
              {...sliderFeaturedSetting}
            >
              <CardMovie margin="0px 12px" />
              <CardMovie margin="0px 12px" />
              <CardMovie margin="0px 12px" />
              <CardMovie margin="0px 12px" />
              <CardMovie margin="0px 12px" />
              <CardMovie margin="0px 12px" />
              <CardMovie margin="0px 12px" />
              <CardMovie margin="0px 12px" />
              <CardMovie margin="0px 12px" />
              <CardMovie margin="0px 12px" />
              <CardMovie margin="0px 12px" />
              <CardMovie margin="0px 12px" />
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

export default DetailMovie;
