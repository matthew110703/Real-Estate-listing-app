import { FaStar } from "react-icons/fa";
import Button from "./Button";

const AgentCard = ({ name, propertySold, image }) => {
  return (
    <article className="max-w-[300px] min-w-[180px] space-y-3 rounded-lg border bg-white p-4 shadow-md">
      <div className="flex justify-around">
        <img
          src={image}
          alt={name}
          width={60}
          height={60}
          className="rounded-full"
        />
        <div className="flex items-center gap-1">
          5.0
          <FaStar className="text-yellow-500" size={24} />
        </div>
      </div>

      <main className="whitespace-nowrap">
        <h4 className="text-lg font-semibold">{name}</h4>
        <p className="text-xs">{propertySold} properties sold</p>
      </main>

      <Button text={"Contact"} className={"w-full"} />
    </article>
  );
};

export default AgentCard;
