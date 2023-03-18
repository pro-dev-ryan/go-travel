import Islands from "./Islands";

const Island = () => {
  return (
    <div className="cardFrame mx-4 md:mx-16">
      <h3>Island Stays</h3>
      <p className="lightText">
        One can choose from a variety of beautiful coral islands which offers
        different staying experiences from ..
      </p>
      <div className="stack-sect">
        {[...Array(3)].map((place, i) => (
          <Islands key={i} place={place} />
        ))}
      </div>
    </div>
  );
};

export default Island;
