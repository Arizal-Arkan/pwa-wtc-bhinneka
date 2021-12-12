import React from 'react';
import Jhon from '../image29.png';
import Imdb from '../imdb.svg';
import keanu from '../keanu.png';
import trailer from '../trailer.png';

function DetailMovie(items) {
  console.log(items?.items?.data?.vote_average);
  const movie = items?.items?.data;
  return (
    <>
      <div className="p-16">
        {/* Card Info Movie */}
        <div className="flex max-w-5xl bg-gray-800 m-auto p-10 items-center rounded-3xl">
          <div className="w-1/4 mr-10">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
              alt=""
            />
          </div>
          <div className="w-11/12 text-white">
            <h2 className="font-bold text-2xl mb-3">{movie?.title}</h2>
            <div className="flex gap-4 mb-5">
              <span className="flex gap-3">
                <img src={Imdb} alt="" /> {movie?.vote_average}
              </span>
              <p className="opacity-40">2019</p>
              <p className="opacity-40">2h 30m</p>
              <p className="opacity-40">USA</p>
              <p className="opacity-40">PG-13</p>
            </div>
            <div className="flex gap-4 mb-5">
              <p className="px-4 py-1 self-center rounded-xl bg-gray-900">
                Action
              </p>
              <p className="px-4 py-1 self-center rounded-xl bg-gray-900">
                Crime
              </p>
              <p className="px-4 py-1 self-center rounded-xl bg-gray-900">
                Thriller
              </p>
            </div>
            <p className="mb-6">
              Super-assassin John Wick returns with a $14 million price tag on
              his head and an army of bounty-hunting killers on his trail. After
              killing a member of the shadowy international assassin’s guild,
              the High Table, John Wick is excommunicado, but the world’s most
              ruthless hit men and women await his every turn.
            </p>
            <div className="flex gap-6">
              <p>Director</p> <p className="font-bold">Lol</p>
            </div>
            <div className="flex gap-6">
              <p>Writer</p> <p className="font-bold">Hahaha</p>
            </div>
          </div>
        </div>

        {/* Cast Movie */}
        <div className="text-white max-w-5xl m-auto mt-24 items-center rounded-3xl">
          <h2 className="font-semibold text-2xl">Cast</h2>
          <div className="flex mt-8 flex-wrap gap-6">
            <div className="w-80 gap-8 flex bg-gray-800 p-4 rounded-2xl items-center">
              <div>
                {' '}
                <img src={keanu} alt="" className="rounded-xl" />{' '}
              </div>
              <div>
                {' '}
                <p className="font-bold">Keanu Reeves</p>{' '}
                <p className="opacity-40">as Jhon Wick</p>{' '}
              </div>
            </div>
            <div className="w-80 gap-8 flex bg-gray-800 p-4 rounded-2xl items-center">
              <div>
                {' '}
                <img src={keanu} alt="" className="rounded-xl" />{' '}
              </div>
              <div>
                {' '}
                <p className="font-bold">Keanu Reeves</p>{' '}
                <p className="opacity-40">as Jhon Wick</p>{' '}
              </div>
            </div>
            <div className="w-80 gap-8 flex bg-gray-800 p-4 rounded-2xl items-center">
              <div>
                {' '}
                <img src={keanu} alt="" className="rounded-xl" />{' '}
              </div>
              <div>
                {' '}
                <p className="font-bold">Keanu Reeves</p>{' '}
                <p className="opacity-40">as Jhon Wick</p>{' '}
              </div>
            </div>
            <div className="w-80 gap-8 flex bg-gray-800 p-4 rounded-2xl items-center">
              <div>
                {' '}
                <img src={keanu} alt="" className="rounded-xl" />{' '}
              </div>
              <div>
                {' '}
                <p className="font-bold">Keanu Reeves</p>{' '}
                <p className="opacity-40">as Jhon Wick</p>{' '}
              </div>
            </div>
            <div className="w-80 gap-8 flex bg-gray-800 p-4 rounded-2xl items-center">
              <div>
                {' '}
                <img src={keanu} alt="" className="rounded-xl" />{' '}
              </div>
              <div>
                {' '}
                <p className="font-bold">Keanu Reeves</p>{' '}
                <p className="opacity-40">as Jhon Wick</p>{' '}
              </div>
            </div>
            <div className="w-80 gap-8 flex bg-gray-800 p-4 rounded-2xl items-center">
              <div>
                {' '}
                <img src={keanu} alt="" className="rounded-xl" />{' '}
              </div>
              <div>
                {' '}
                <p className="font-bold">Keanu Reeves</p>{' '}
                <p className="opacity-40">as Jhon Wick</p>{' '}
              </div>
            </div>
          </div>
        </div>

        {/* Movie Videos */}
        <div className="text-white max-w-5xl m-auto mt-24 items-center rounded-3xl">
          <h2 className="font-semibold text-2xl">Videos</h2>
          <div className="flex mt-8 flex-wrap gap-6">
            <img src={trailer} alt="" />
            <img src={trailer} alt="" />
            <img src={trailer} alt="" />
          </div>
        </div>

        {/* Photos Movie */}
        <div className="text-white max-w-5xl m-auto mt-24 items-center rounded-3xl">
          <h2 className="font-semibold text-2xl">Photos</h2>
          <div className="flex mt-8 flex-wrap gap-6">
            <img src={trailer} alt="" />
            <img src={trailer} alt="" />
            <img src={trailer} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailMovie;
