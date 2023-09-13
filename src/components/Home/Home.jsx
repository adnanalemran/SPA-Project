import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Home.css";

const Home = () => {
  const [allActors, setAllActors] = useState([]);
  const [selectedActors, setSelectedActors] = useState([]);

  useEffect(() => { 
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAllActors(data));
  }, []);

  const handleSelectActor = (actor) => {
    setSelectedActors([...selectedActors, actor]);
  };

  
  console.log(selectedActors);

  return (
    <div className="container">
      <div className="home-container">
        <div className="card-container">
          {allActors.map((actor) => (
            <Card
              key={actor.id}
              actor={actor}
              handleSelectActor={handleSelectActor}
            />
          ))}
        </div>
        <div className="cart">
          <h1>This Cart</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
