import Islands from "./Islands";

const Island = () => {
  return (
    <div className="cardFrame">
      <h3>Island Stays</h3>
      <p className="lightText">
        One can choose from a variety of beautiful coral islands which offers
        different staying experiences from ..
      </p>
      {[...Array(3)].map((place, i) => (
        <Islands key={i} place={place} />
      ))}
    </div>
  );
};

export default Island;
