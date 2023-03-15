import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <div className="cardFrame">
      <h3 className="mb-20">
        What Our Clients Says <br /> About Us
      </h3>
      <div className="space-y-20">
        {[...Array(3)].map((card) => (
          <Testimonial key={card} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
