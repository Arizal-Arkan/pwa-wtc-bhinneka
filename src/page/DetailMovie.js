import React, { useRef } from 'react';
import axios from 'axios';
import play from '../images/play.svg';
import imdb from '../images/imdb.svg';
import Slider from 'react-slick';
import { useHistory } from 'react-router-dom'
import './../css/home.css';
import { useLocation } from 'react-router-dom';
import CardMovie from './../component/CardMovie';
import Footer from './../component/Footer';
import SectionHero from '../component/SectionHero';
import Menu from '../component/Menu';


function DetailMovie() {
    const location = useLocation();
    const movId = location?.state?.movie?.id;
    const [isMovie, setMovie] = React.useState([]);
    const [isMovieRelated, setMovieRelated] = React.useState([]);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const dateMovie = new Date(isMovie?.release_date);
    let director = [];
    let story = [];
    let cast = [];
    const history = useHistory();


    const _handleDetail = (item) => {
        console.log(item);
        history.push({ pathname: `/detail/${item.id}`, state: { movie: item } });
        document.getElementById('section-hero').scrollIntoView({ behavior: 'smooth' })
    }

    const sliderFeaturedSettingVideo = {
        autoplay: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
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

    const sliderFeaturedSetting = {
        autoplay: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        rows: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
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

    const customSliderFeatured = useRef(null);
    const nextFeatured = () => {
        customSliderFeatured.current.slickNext();
    };

    React.useEffect(() => {
        axios({
            url: `https://api.themoviedb.org/3/movie/${movId}?api_key=04a9ec5cdd2c8b4ee1d83b7fe5b2a1c7&append_to_response=videos,images,credits,release_dates`,
            method: "GET",
        })
            .then(res => {
                console.log(res.data);
                setMovie(res.data)
            })
            .catch(err => {
                console.error(err);
            })
    }, [movId])

    React.useEffect(() => {
        axios({
            url: `https://api.themoviedb.org/3/movie/${movId}/similar?api_key=04a9ec5cdd2c8b4ee1d83b7fe5b2a1c7&language=en-US&page=1`,
            method: "GET",
        })
            .then(res => {
                console.log(res.data);
                setMovieRelated(res.data)
            })
            .catch(err => {
                console.error(err);
            })
    }, [movId])

    console.log(isMovieRelated.results);

    function convertMinsToHrsMins(min) {
        var hours = Math.trunc(min / 60);
        var minutes = min % 60;
        return `${hours}h ${minutes}m`
    }

    isMovie?.credits?.crew?.forEach(function (entry) {
        if (entry.job === 'Director') {
            director.push(entry.name);
        }
    });

    isMovie?.credits?.crew?.forEach(function (entry) {
        if (entry.job === 'Story') {
            story.push(entry.name);
        }
    });

    isMovie?.credits?.cast?.forEach(function (entry) {
        if (entry.known_for_department === 'Acting') {
            cast.push(entry);
        }
    });

    return (
        <>
         <Menu open={isMenuOpen} setIsMenuOpen={setIsMenuOpen} posterMovie={isMovie?.poster_path} />
          <SectionHero isDetail={true} itemMovie={isMovie} setIsMenuOpen={setIsMenuOpen}/>
            <div className='p-28' id="detail">
                {/* Card Info Movie */}
                <div className='flex bg-gray-800 m-auto p-10 items-center rounded-3xl'>
                    <div className='w-1/4 mr-10 flex-none'><img className='w-full h-full object-cover rounded-lg' src={`https://image.tmdb.org/t/p/w500${isMovie?.poster_path}`} alt="" /></div>
                    <div className='w-11/12 text-white'>
                        <h2 className='font-bold text-2xl mb-3'>{isMovie?.title}</h2>
                        <div className='flex gap-4 mb-5'>
                            <span className='flex gap-3'><img src={imdb} alt="" /> {isMovie?.vote_average}</span>
                            <p className='opacity-40'>{dateMovie?.getFullYear()}</p>
                            <p className='opacity-40'>{convertMinsToHrsMins(isMovie?.runtime)}</p>
                            <p className='opacity-40'>{isMovie?.production_countries && isMovie?.production_countries[0]?.iso_3166_1}</p>
                            <p className='opacity-40'>{isMovie?.release_dates?.results[0]?.release_dates[0]?.certification}</p>
                        </div>
                        <div className='flex gap-4 mb-5'>
                            {isMovie?.genres?.map((val, i) => {
                                console.log(val);
                                return (
                                    <div key={i}>
                                        <p className='px-4 py-1 self-center rounded-xl bg-gray-900'>{val.name}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className='mb-6'>{isMovie?.overview}</p>
                        <div className='flex'>
                            <p className='mr-6'>Director</p> <p className='font-bold'>{director?.join(', ')}</p>
                        </div>
                        <div className='flex'>
                            <p className='mr-10'>Writer</p> <p className='font-bold'>{story?.join(', ')}</p>
                        </div>
                    </div>
                </div>

                {/* Cast Movie */}
                <div className='text-white m-auto mt-24 items-center rounded-3xl'>
                    <h2 className='font-semibold text-2xl'>Cast</h2>
                    <div className="slider-featured-frame">
                        <Slider
                            ref={customSliderFeatured}
                            className="slider-featured"
                            {...sliderFeaturedSetting}
                        >
                            {cast?.map((val, i) => {
                                return (
                                    <div className='p-4'>
                                        <div className='w-80 gap-8 flex bg-gray-800 p-4 rounded-2xl items-center' key={i}>
                                            <div className='w-16 h-16 flex-none'> <img src={`https://image.tmdb.org/t/p/w500${val.profile_path}`} alt="" className='rounded-xl w-full h-full object-cover' /> </div>
                                            <div> <p className='font-bold'>{val.original_name}</p> <p className='opacity-40'>{val.character}</p> </div>
                                        </div>
                                    </div>

                                );
                            })}
                        </Slider>

                        <button
                            className="button-glass button-glass-circle"
                            onClick={nextFeatured}
                        >
                            <div className="icon">
                                <span className="material-icons">chevron_right</span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Movie Videos */}
                <div className='text-white m-auto mt-24 items-center rounded-3xl'>
                    <h2 className='font-semibold text-2xl mb-9'>Videos</h2>
                    <div className="slider-featured-frame">
                        <Slider
                            ref={customSliderFeatured}
                            className="slider-featured"
                            {...sliderFeaturedSettingVideo}
                        >
                            {isMovie?.videos?.results?.map((val, i) => {
                                return (
                                    <div>
                                        <div className={`w-80 h-52 bg-center rounded-xl bg-no-repeat bg-cover flex place-content-center`} style={{ backgroundImage: `url(https://i.ytimg.com/vi/${val.key}/hqdefault.jpg)` }}>
                                            <img className='w-16' src={play} alt="" />
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>

                        <button
                            className="button-glass button-glass-circle"
                            onClick={nextFeatured}
                        >
                            <div className="icon">
                                <span className="material-icons">chevron_right</span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Photos Movie */}
                <div className='text-white m-auto mt-24 items-center rounded-3xl'>
                    <h2 className='font-semibold text-2xl'>Photos</h2>
                    <div className="slider-featured-frame">
                        <Slider
                            ref={customSliderFeatured}
                            className="slider-featured"
                            {...sliderFeaturedSettingVideo}
                        >
                            {isMovie?.images?.backdrops?.map((val, i) => {
                                return (
                                    <div>
                                        <div className='w-80 h-52'>
                                            <img className='rounded-xl w-full h-full object-cover' key={i} src={`https://image.tmdb.org/t/p/w500${val.file_path}`} alt="" />
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>

                        <button
                            className="button-glass button-glass-circle"
                            onClick={nextFeatured}
                        >
                            <div className="icon">
                                <span className="material-icons">chevron_right</span>
                            </div>
                        </button>
                    </div>
                </div>

                <div className="section-new mb-16">
                    <h3>Related</h3>
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
                        {isMovieRelated?.results && isMovieRelated?.results?.map((val, i) => {
                            return i < 6 ? (
                                <CardMovie margin="0px 12px" items={val} propKey={i} detailMov={() => _handleDetail(val)} />
                            ) : false;
                        })}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default DetailMovie;
