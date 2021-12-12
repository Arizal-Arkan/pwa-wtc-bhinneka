import './CardMovie.css';
import dune from './../../dune.png';

function CardMovie(props) {
  const { margin } = props;
  // console.log('data', data);
  return (
    <>
      <div
        style={{
          margin: margin || '',
        }}
      >
        <div className="card-movie">
          <img src={dune} alt="poster" />
          <h4>Lorem Ipsum</h4>
          <p>2021</p>
        </div>
      </div>
    </>
  );
}

export default CardMovie;
