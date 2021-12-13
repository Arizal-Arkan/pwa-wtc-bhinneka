import { useRef, useState, useEffect } from 'react';
import './SectionHero.css';
import Slider from 'react-slick';

import Nav from './../Nav';
import CardHero from './../CardHero';

import slide_1 from '../../slide_1.png';
import slide_2 from '../../slide_2.png';

function SectionHero(props) {
  const { isDetail, setIsMenuOpen, itemMovie } = props;
  const [currentSlideHero, setCurrentSlideHero] = useState(0);
  const [watchList, setWatchList] = useState([]);

  // custom slider hero
  const customSliderHero = useRef(null);
  const nextHero = () => {
    customSliderHero.current.slickNext();
  };
  const prevHero = () => {
    customSliderHero.current.slickPrev();
  };
  // custom slider hero

  const cachedWatch = window.localStorage.getItem("watchlist");

  useEffect(() => {
    return () => {
      console.info("useEffect for localStorage");
    if (cachedWatch !== null) {
      setWatchList(JSON.parse(cachedWatch));
    }
    }
  }, [cachedWatch])

  const _handleWatchList = () => {
    console.log('item', watchList);
    const arrWatch = []
    const currentIndex = watchList.length;
    const newWatch = [...watchList, { id: currentIndex + 1, itemMovie }];
    arrWatch.push(itemMovie)
    console.log(arrWatch);
    setWatchList(newWatch);
    localStorage.setItem('watchlist', JSON.stringify(arrWatch));
}

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
      imdb: '8.0',
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

  const _handleWtchDetail = () => {
    if (sliderHero[currentSlideHero]?.id === '001') {
      window.open('https://www.youtube.com/watch?v=pU8-7BX9uxs');
    } else {
      window.open('https://www.youtube.com/watch?v=8g18jFHCLXk');
    }
  };

  const _handleScroll = () => {
    document.getElementById('detail').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div id="section-hero" className="section-hero">
        <Slider
          className="slider-hero"
          {...sliderHeroSetting}
          ref={customSliderHero}
        >
          {sliderHero?.map((item, index) => (
            isDetail ? <CardHero data={itemMovie} key={index} isDetail={isDetail} /> : <CardHero data={item} key={index} />
          ))}
        </Slider>
        <div className="overlay-hero">
          <Nav showSearch={true} setIsMenuOpen={setIsMenuOpen} />

          <div className="movie-info">
            <h1>{itemMovie !== undefined ? itemMovie?.title : sliderHero[currentSlideHero]?.title}</h1>
            <div className="movie-score">
              <span>{itemMovie !== undefined ? itemMovie?.vote_average : sliderHero[currentSlideHero]?.imdb}</span>
              <span>/ 10</span>
            </div>
          </div>

          <div className="movie-action">
            <div className="user-action">
              <button className="button-glass button-glass-icon" onClick={() => _handleWatchList()}>
                <span className="material-icons">bookmark_border</span>
              </button>
              <button className="button-glass button-glass-text-icon ml-4" onClick={() => _handleWtchDetail()}>
                Watch Trailer
                <div className="icon">
                  <span className="material-icons">play_circle</span>
                </div>
              </button>
            </div>

            {isDetail ? (
              <div className="movie-detail" onClick={() => _handleScroll()}>
                <p>Movie Detail</p>
                <button className="button-glass button-glass-icon">
                  <span className="material-icons">expand_more</span>
                </button>
              </div>
            ) : (
              <div className="slider-action">
                <button
                  className="button-glass button-glass-icon"
                  onClick={prevHero}
                >
                  <span className="material-icons">chevron_left</span>
                </button>
                <button
                  className="button-glass button-glass-icon ml-2"
                  onClick={nextHero}
                >
                  <span className="material-icons">chevron_right</span>
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
