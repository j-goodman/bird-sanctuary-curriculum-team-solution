export default function Cart({
  birds,
  cartTotal,
  discount,
  bonuses,
  deleteBird,
}) {
  const formatPrice = (price) => price.toFixed(2);

  return (
    <div className="Cart">
      <h3>Cart</h3>
      <h5>Discount: {discount}%</h5>
      <h4>Total: ${cartTotal}</h4>
      <ol>
        {birds.map((bird, index) => {
          return (
            <li key={bird.id + index}>
              {bird.name}: ${formatPrice(bird.amount)}
              <button onClick={() => deleteBird(index)}>delete</button>
            </li>
          );
        })}
      </ol>

      <h5>Your donations has qualified you for the following items:</h5>
      <ul>
        {bonuses.map((bonus) => {
          return <li key={bonus}>{bonus}</li>;
        })}
      </ul>
    </div>
  );
}
