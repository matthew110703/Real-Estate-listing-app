const Hero = () => {
  return (
    <section id="hero" className="relative">
      <div className="absolute top-4 z-10 w-full space-y-0 px-8 text-start lg:top-16 lg:space-y-2">
        <h1 className="font- w-3/4 font-serif text-2xl md:text-4xl lg:w-2/3 lg:text-7xl">
          Find Your Perfect Match
        </h1>
        <p className="w-2/3 text-xs lg:w-full lg:text-base">
          Whether you're buying, selling, or renting, our experienced team is
          here to guide you every step of the way.
        </p>
      </div>
      <figure className="lg:px-4">
        <img
          src="/hero.jpg"
          alt="Hero Image"
          className="min-w-full scale-x-[-1] rounded-lg object-cover lg:max-h-[600px]"
        />
      </figure>
    </section>
  );
};

export default Hero;
