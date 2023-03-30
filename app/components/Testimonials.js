import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <div className="cardFrame">
      <h3 className="mb-20 md:mb-5">
        What Our Clients Says <br /> About Us
      </h3>
      <div className="space-y-20 md:space-y-0 spacing-sect stack-sect">
        {[...Array(3)].map((card, i) => (
          <Testimonial key={i} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
