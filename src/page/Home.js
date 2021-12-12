import React, { useRef } from 'react';
import './../css/home.css';
import Slider from 'react-slick';

import SectionHero from './../component/SectionHero';
import CardMovie from './../component/CardMovie';

function Home() {
  // custom slider featured
  const customSliderFeatured = useRef(null);
  const nextFeatured = () => {
    customSliderFeatured.current.slickNext();
  };
  // custom slider featured

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
      <SectionHero isDetail={true} />

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

export default Home;
