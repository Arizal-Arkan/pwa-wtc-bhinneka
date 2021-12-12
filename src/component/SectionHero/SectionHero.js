import { useRef, useState } from 'react';
import './SectionHero.css';
import Slider from 'react-slick';

import Nav from './../Nav';
import CardHero from './../CardHero';

import slide_1 from '../../slide_1.png';
import slide_2 from '../../slide_2.png';

function SectionHero(props) {
  const { isDetail } = props;
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

  const sliderHeroSetting = {
    autoplay: isDetail ? false : true,
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
          <Nav showSearch={true} />

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

            {isDetail ? (
              <div className="movie-detail">
                <p>Movie Detail</p>
                <button class="button-glass button-glass-icon">
                  <span class="material-icons">expand_more</span>
                </button>
              </div>
            ) : (
              <div className="slider-action">
                <button
                  class="button-glass button-glass-icon"
                  onClick={prevHero}
                >
                  <span class="material-icons">chevron_left</span>
                </button>
                <button
                  class="button-glass button-glass-icon ml-2"
                  onClick={nextHero}
                >
                  <span class="material-icons">chevron_right</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionHero;
