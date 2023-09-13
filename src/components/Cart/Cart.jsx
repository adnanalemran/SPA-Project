/* eslint-disable react/prop-types */
const Cart = (props) => {
    const { selectedActors, remaining, totalCost } = props;

    console.log(remaining )

    return (
      <div>
        <h3>Select Actor: {selectedActors.length}</h3>
        <h5>Total cost: {totalCost}</h5>
        <h5>Remaining: {remaining}</h5>
        <ul>
          {selectedActors.map((actor) => (
            <li key={actor.id}>
              <div>Name: {actor.name}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
export default Cart;
