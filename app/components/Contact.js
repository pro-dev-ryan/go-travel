const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around md:justify-between items-center contact-bg mx-4 md:mx-16 h-36 text-center gap-3 md:px-6">
      <div className="w-full pt-2 md:pt-0 md:space-y-1 md:w-[65%] md:text-left">
        <p className="text-xl text-light font-medium md:font-semibold  font-headline">
          Let’s Ready to Explore The <br /> World With Us.
        </p>
        <p className="hidden md:block md:text-sm font-light text-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          efficitur ac quam in congue.{" "}
        </p>
      </div>
      <div className="center items-center mb-5 md:mb-0 md:w-[30%] md:justify-end">
        <button className="primaryButton md:px-9 py-3  bg-white text-secondary px-4">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Contact;
