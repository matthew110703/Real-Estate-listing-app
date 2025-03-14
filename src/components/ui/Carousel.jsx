import { useState } from "react";

// UI
import Button from "./Button";

// Icons
import { IoIosArrowForward } from "react-icons/io";

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="relative w-full overflow-hidden rounded-lg lg:h-[600px]">
      {/* Images */}
      <div
        className="flex flex-nowrap transition-transform duration-300 ease-in-out max-md:snap-x max-md:snap-mandatory"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img?.original}
            alt="property"
            className="h-full w-full flex-shrink-0 object-cover max-md:snap-center"
          />
        ))}
      </div>

      {/* Next  */}
      <button
        className={
          "bg-primary absolute top-1/2 right-0 z-10 hidden rounded-full p-1.5 text-white sm:flex"
        }
        onClick={() => setIndex((prev) => (prev + 1) % images.length)}
      >
        <IoIosArrowForward size={32} />
      </button>

      {/* Previous */}
      <button
        className={
          "bg-primary absolute top-1/2 left-0 z-10 hidden scale-x-[-1] rounded-full p-1.5 text-white sm:flex"
        }
        onClick={() =>
          setIndex((prev) => (prev - 1 + images.length) % images.length)
        }
      >
        <IoIosArrowForward size={32} />
      </button>

      <div className="absolute right-0 bottom-0 left-0 flex justify-center gap-2 p-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full ${index === i ? "bg-primary" : "bg-gray-200"} `}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
