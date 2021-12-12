import React from 'react'

function WatchList() {
    return (
        <div className='p-16'>
            <div className='justify-between mb-10 flex max-w-5xl bg-gray-800 m-auto p-8 items-center rounded-3xl text-white'>
                <div className='flex gap-5 items-center'>
                    <div> <img className='rounded-xl' src="./images/content/keanu.png" alt="" /> </div>
                    <div><h2 className='text-lg font-semibold'>Jhon Thor</h2> <p className='opacity-40'>Movie Enthusiastic</p></div>
                </div>
                <div className='flex items-center'>
                    <span className="material-icons">
                        bookmark
                    </span>
                    <p> 54 Watchlist </p>
                </div>
            </div>

            {/* My Watch List */}
            <div className='text-white max-w-5xl m-auto mt-24 items-center rounded-3xl'>
                <h2 className='font-semibold text-2xl'>My Watchlist</h2>
            </div>
        </div>
    )
}

export default WatchList
