import './CardHero.css';

function CardHero(props) {
  const { data } = props;
  // console.log('data', data);
  return (
    <>
      <div className="card-hero">
        <img className="" src={data?.image} alt="poster" />
      </div>
    </>
  );
}

export default CardHero;
