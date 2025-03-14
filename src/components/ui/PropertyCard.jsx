import { useState } from "react";
import { useNavigate } from "react-router-dom";

// UI
import Button from "./Button";
import IconButton from "./IconButton";

// Icons
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { BsFillGeoAltFill } from "react-icons/bs";

const PropertyCard = ({ property, className }) => {
  const navigate = useNavigate();
  const [isFavorited, setIsFavorited] = useState(false);
  return (
    <article
      role="button"
      className={`relative overflow-hidden rounded-lg shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl ${className}`}
      onClick={() => navigate(`/property/${property?.listingId}`)}
    >
      <p className="text-xs font-light">
        Brokered by {property.agent.branchName}
      </p>
      <figure className="relative">
        <p className="absolute top-0 left-0 m-2 rounded-3xl bg-white px-2 py-0.5 text-xs font-semibold">
          {property?.flag}
        </p>
        <img
          src={property.imageUris[0]}
          alt="thumbnail"
          className="w-fit rounded-lg"
        />
        {/* Favorite Button */}
        <IconButton
          icon={isFavorited ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
          className={"absolute right-0 bottom-0 m-2 text-3xl text-white"}
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorited(!isFavorited);
          }}
        />
        <a
          role="button"
          href={`https://www.google.com/maps?q=${property?.location?.coordinates?.latitude},${property?.location?.coordinates?.longitude}`}
          target="_blank"
          rel="noopener noreferrer"
          className={"absolute bottom-0 left-0 z-10 m-2 text-white"}
          onClick={(e) => e.stopPropagation()}
        >
          <IconButton icon={<BsFillGeoAltFill size={28} />} />
        </a>
      </figure>
      <main className="p-4">
        <p className="align-middle text-sm font-semibold">
          <span
            className={`mr-1 align-middle text-4xl ${property.publicationStatus === "Live" ? "text-green-600" : "text-red-600"}`}
          >
            •
          </span>
          {property.title}
        </p>
        <h2 className="text-2xl font-bold">{property?.pricing?.label}</h2>

        {/* Attributes */}
        <div className="flex flex-wrap items-center gap-x-3">
          <p>
            <strong>{property?.attributes?.bedrooms || 1} </strong>
            bed
          </p>
          <p>
            <strong>{property?.attributes?.bathrooms || 1} </strong>
            bath
          </p>
          <p>
            <strong>{property?.attributes?.livingRooms || 1} </strong>
            living
          </p>
        </div>
        <p className="line-clamp-2 w-1/2 text-sm font-light text-wrap text-ellipsis">
          {property?.address}
        </p>
      </main>
      <Button
        text={"Contact Agent"}
        className={"absolute right-4 bottom-4 z-10"}
      />
    </article>
  );
};

export default PropertyCard;
