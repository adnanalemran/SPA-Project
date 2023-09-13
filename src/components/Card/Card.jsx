import './Card.css'

const Card = ({ actor, handleSelectActor }) => {
  const { name, image, role, salary, country } = actor;

  return (
    <div>
      <div className="card">
        <div className="card-img">
          <img className="photo" src={image} alt="" />
        </div>
        <h2>{name}</h2>
        <p>
          <small>Country: {country}</small>
        </p>
        <div className="info">
          <p>Salary: ${salary}</p>
          <p>{role}</p>
        </div>
        <button className="card-btn" onClick={()=>handleSelectActor(actor)}>
          Select
        </button>
      </div>
    </div>
  );
};

export default Card;
