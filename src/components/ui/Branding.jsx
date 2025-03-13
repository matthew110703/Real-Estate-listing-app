// Icons
import { BiBuildingHouse } from "react-icons/bi";

const Branding = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="">
        <BiBuildingHouse className="text-primary text-5xl" />
        <h1 className="text-2xl font-bold before:font-serif before:text-5xl before:font-semibold before:content-['My']">
          Estate.com
        </h1>
      </div>
      <p>Your Success Starts with the Right Property.</p>
    </div>
  );
};

export default Branding;
