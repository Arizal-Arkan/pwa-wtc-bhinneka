import './CardHero.css';

function CardHero(props) {
  const { data, isDetail } = props;
  // console.log('data', data);
  return (
    <>
      <div className="card-hero">
        <img className="" src={isDetail ? `https://image.tmdb.org/t/p/original${data?.backdrop_path}` : data?.image} alt="poster" />
      </div>
    </>
  );
}

export default CardHero;
