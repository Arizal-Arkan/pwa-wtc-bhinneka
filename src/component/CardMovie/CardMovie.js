import './CardMovie.css';

function CardMovie(props) {
  const { margin, items, propKey, detailMov } = props;
  // console.log('data', data);
  console.log(items);
  const dateMovie = new Date(items?.release_date);
  return (
    <>
      <div
        style={{
          margin: margin || '',
          cursor: 'pointer'
        }}
        key={propKey}
        onClick={detailMov}
      >
        <div className="card-movie">
          <img src={`https://image.tmdb.org/t/p/w500${items?.poster_path}`} alt="poster" />
          <h4>{items?.title}</h4>
          <p>{dateMovie?.getFullYear()}</p>
        </div>
      </div>
    </>
  );
}

export default CardMovie;
