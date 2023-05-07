export default function Cards({ birds, addBird }) {
  return (
    <div className="birds">
      {birds.map((bird) => {
        return (
          <div className="card" key={bird.id}>
            <h4>{bird.name}</h4>
            <h5>Price: ${bird.amount}</h5>
            <img src={bird.img} alt={bird.name} />
            <p>{bird.description}</p>
            <button onClick={() => addBird(bird)}>Adopt</button>
          </div>
        );
      })}
    </div>
  );
}
