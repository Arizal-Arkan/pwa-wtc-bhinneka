import React from 'react';

function DetailMovie(items) {
    const movie = items?.items?.data;
    const dateMovie = new Date(items?.items?.data?.release_date);
    let director = [];
    let story = [];
    let cast = [];

    function convertMinsToHrsMins(min) {
        var hours = Math.trunc(min / 60);
        var minutes = min % 60;
        return `${hours}h ${minutes}m`
    }

    movie?.credits?.crew?.forEach(function (entry) {
        if (entry.job === 'Director') {
            director.push(entry.name);
        }
    });

    movie?.credits?.crew?.forEach(function (entry) {
        if (entry.job === 'Story') {
            story.push(entry.name);
        }
    });

    movie?.credits?.cast?.forEach(function (entry) {
        if (entry.known_for_department === 'Acting') {
            cast.push(entry);
        }
    });

    console.log(cast);

    return (
        <>
            <div className='p-16'>
                {/* Card Info Movie */}
                <div className='flex max-w-5xl bg-gray-800 m-auto p-10 items-center rounded-3xl'>
                    <div className='w-1/4 mr-10 flex-none'><img className='w-full h-full object-cover rounded-lg' src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="" /></div>
                    <div className='w-11/12 text-white'>
                        <h2 className='font-bold text-2xl mb-3'>{movie?.title}</h2>
                        <div className='flex gap-4 mb-5'>
                            <span className='flex gap-3'><img src="./images/content/imbd.svg" alt="" /> {movie?.vote_average}</span>
                            <p className='opacity-40'>{dateMovie?.getFullYear()}</p>
                            <p className='opacity-40'>{convertMinsToHrsMins(movie?.runtime)}</p>
                            <p className='opacity-40'>{movie?.production_countries[0]?.iso_3166_1}</p>
                            <p className='opacity-40'>{movie?.release_dates?.results[0]?.release_dates[0]?.certification}</p>
                        </div>
                        <div className='flex gap-4 mb-5'>
                            {movie?.genres?.map((val, i) => {
                                console.log(val);
                                return (
                                    <div key={i}>
                                        <p className='px-4 py-1 self-center rounded-xl bg-gray-900'>{val.name}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className='mb-6'>{movie?.overview}</p>
                        <div className='flex'>
                            <p className='mr-6'>Director</p> <p className='font-bold'>{director?.join(', ')}</p>
                        </div>
                        <div className='flex'>
                            <p className='mr-10'>Writer</p> <p className='font-bold'>{story?.join(', ')}</p>
                        </div>
                    </div>
                </div>

                {/* Cast Movie */}
                <div className='text-white max-w-5xl m-auto mt-24 items-center rounded-3xl'>
                    <h2 className='font-semibold text-2xl'>Cast</h2>
                    <div className='flex mt-8 flex-wrap gap-6'>
                        {cast?.map((val, i) => {
                            return (
                                <div className='w-80 gap-8 flex bg-gray-800 p-4 rounded-2xl items-center' key={i}>
                                    <div className='w-16 h-16 flex-none'> <img src={`https://image.tmdb.org/t/p/w500${val.profile_path}`} alt="" className='rounded-xl w-full h-full object-cover' /> </div>
                                    <div> <p className='font-bold'>{val.original_name}</p> <p className='opacity-40'>{val.character}</p> </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Movie Videos */}
                <div className='text-white max-w-5xl m-auto mt-24 items-center rounded-3xl'>
                    <h2 className='font-semibold text-2xl'>Videos</h2>
                    <div className='flex mt-8 flex-wrap gap-6'>
                        {movie?.videos?.results?.map((val, i) => {
                            return (
                                <div className={`w-80 h-52 bg-center rounded-xl bg-no-repeat bg-cover flex place-content-center`} style={{ backgroundImage: `url(https://i.ytimg.com/vi/${val.key}/hqdefault.jpg)` }}>
                                    <img className='w-16' src="./images/content/play.svg" alt="" />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Photos Movie */}
                <div className='text-white max-w-5xl m-auto mt-24 items-center rounded-3xl'>
                    <h2 className='font-semibold text-2xl'>Photos</h2>
                    <div className='flex mt-8 flex-wrap gap-6'>
                        {movie?.images?.backdrops?.map((val, i) => {
                            return (
                                <div className='w-80 h-52'>
                                    <img className='rounded-xl w-full h-full object-cover' key={i} src={`https://image.tmdb.org/t/p/w500${val.file_path}`} alt="" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailMovie;
