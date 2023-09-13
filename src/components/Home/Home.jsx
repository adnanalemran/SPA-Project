/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Home.css";
import Cart from "../Cart/Cart";
const Home = () => {
  // State variables for actors, selected actors, remaining budget, and total cost.
  const [allActors, setAllActors] = useState([]);
  const [selectedActors, setSelectedActors] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  // Fetch data from a JSON file when the component mounts.
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAllActors(data));
  }, []);

  // Function to handle actor selection.
  const handleSelectActor = (actor) => {
    const isExist = selectedActors.find((item) => item.id === actor.id);
    let count = actor.salary;

    if (isExist) {
      return alert("Already booked");
    } else {
      selectedActors.forEach((item) => {
        count += item.salary;
      });

      const totalRemaining = 20000 - count;

      if (totalRemaining < 0) {
        return alert("No more money available");
      }

      setTotalCost(count);
      setRemaining(totalRemaining);
      setSelectedActors([...selectedActors, actor]);
    }
  };
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
          <Cart selectedActors={selectedActors} totalCost={totalCost} remaining={remaining} />
        </div>
      </div>
    </div>
  );
};

export default Home;
