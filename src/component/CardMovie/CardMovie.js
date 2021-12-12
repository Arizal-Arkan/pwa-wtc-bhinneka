import './CardMovie.css';
import dune from './../../dune.png';

function CardMovie(props) {
  const { margin, items, propKey, detailMov } = props;
  console.log(items);
  const dateMovie = new Date(items?.release_date);
  return (
    <>
      <div
        style={{
          margin: margin || '',
          cursor: 'pointer',
        }}
        key={propKey}
        onClick={detailMov}
      >
        <div className="card-movie">
          <img
            src={
              items?.poster_path
                ? `https://image.tmdb.org/t/p/w500${items?.poster_path}`
                : dune
            }
            alt="poster"
          />
          <h4>{items?.title || 'Title'}</h4>
          <p>{dateMovie?.getFullYear() || '2021'}</p>
        </div>
      </div>
    </>
  );
}

export default CardMovie;
