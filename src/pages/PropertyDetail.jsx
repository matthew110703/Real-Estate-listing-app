import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Layout
import { Header, Footer } from "../components/layout";
// UI
import { Button, Input, IconButton, Carousel } from "../components/ui";
// Icons
import {
  MdFavorite,
  MdOutlineFavoriteBorder,
  MdOutlineEmail,
  MdDirectionsRailway,
  MdLocationCity,
} from "react-icons/md";
import { BsFillGeoAltFill } from "react-icons/bs";
import { FaRegShareFromSquare, FaSchool } from "react-icons/fa6";

// Redux
import { useGetPropertyQuery } from "../store/apiSlice";
import { useDispatch } from "react-redux";
import { setToast } from "../store/toastSlice";

// Currency Formatter
const formatCurrency = (amount, currency = "GBP") => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(false);

  const { data, error, isLoading } = useGetPropertyQuery(id);
  const property = data?.data?.listingDetails;

  if (isLoading || !property) {
    return (
      <>
        <Header />
        <p className="my-16 text-center text-2xl font-semibold">Loading...</p>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <p className="my-16 text-center text-2xl font-semibold">
          {error?.data?.message || "An error occurred"}
        </p>
        <Footer />
      </>
    );
  }

  const handleFavorite = () => {
    setFavorite((prev) => !prev);
    // Dispatch toast
    dispatch(
      setToast({ message: "Property added to favorites", type: "success" }),
    );
  };

  return (
    <>
      <Header />

      <section className="container mx-auto px-4 py-8">
        <button className="py-2 hover:underline" onClick={() => navigate(-1)}>
          {"<"} Go Back
        </button>

        <div className="flex gap-4">
          {/* Carousel */}
          <Carousel images={property?.propertyImage} />

          {/* Contact */}
          <div className="hidden w-2/6 flex-col gap-y-4 rounded-lg p-4 shadow lg:flex">
            <div className="flex items-center gap-x-2 self-end">
              {/* Favorite Button */}
              <IconButton
                icon={
                  favorite ? (
                    <MdFavorite size={28} />
                  ) : (
                    <MdOutlineFavoriteBorder size={28} />
                  )
                }
                onClick={handleFavorite}
              />

              {/* Geolocation */}
              <a
                role="button"
                href={`https://www.google.com/maps?q=${property?.location?.coordinates?.latitude},${property?.location?.coordinates?.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5"
                onClick={(e) => e.stopPropagation()}
              >
                <IconButton icon={<BsFillGeoAltFill size={28} />} />
              </a>

              {/* Share */}
              <IconButton
                icon={<FaRegShareFromSquare size={28} />}
                onClick={() => {}}
              />
            </div>

            <div className="flex flex-col gap-4 border-b">
              <h5 className="font-semibold">Tour with a local buyer's agent</h5>
              <form className="space-y-3">
                <Input placeholder={"Email"} />
                <Input placeholder={"Phone"} />
                <Button text={"Request Tour"} className={"mt-4 w-full"} />
              </form>
            </div>

            <hr />
            <div className="my-4 space-y-6 text-center">
              <h4 className="text-xl font-semibold">
                More about this property
              </h4>
              <Button
                text={"Email agent"}
                className={"mx-auto w-5/6"}
                icon={<MdOutlineEmail size={20} />}
              />
              <p className="text-sm">Message sent to a buyer's agent</p>
              <p className="font-light" style={{ fontSize: "0.7rem" }}>
                By proceeding, you consent to receive calls and texts at the
                number you provided, including marketing by autodialer and
                prerecorded and artificial voice, and email, from realtor.com
                and about your inquiry and other home-related matters, but not
                as a condition of any purchase. You also agree to our, and to
                our regarding the information relating to you. Msg/data rates
                may apply. This consent applies even if you are on a corporate,
                state or national Do Not Call list.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <p className="align-middle text-sm font-semibold">
            <span
              className={`mr-1 align-middle text-4xl ${property?.publicationStatus === "Live" ? "text-green-600" : "text-red-600"}`}
            >
              •
            </span>
            {property?.title}
          </p>

          <h2 className="text-3xl font-bold">
            {formatCurrency(property?.pricing?.internalValue)}
          </h2>

          {/* Meta Info  */}
          <div className="flex flex-wrap items-center gap-x-3">
            <p>
              <strong>{property?.counts?.numBedrooms} </strong>bed
            </p>
            <p>
              <strong>{property?.counts?.numBathrooms} </strong>bath
            </p>
            <p>
              <strong>{property?.counts?.numLivingRooms} </strong>living
            </p>
            <p>
              <strong>{property?.floorArea?.value} </strong>sqft lot
            </p>
          </div>
          <p>{property?.displayAddress}</p>
          <div className="mt-4 flex gap-4">
            <Button text={"Contact Agent"} />
            <Button
              text={"Share this home"}
              className={"bg-white"}
              style={{ color: "#4D55CC" }}
            />
          </div>
          {/* Description */}
          <details>
            <summary>Description</summary>
            <p
              className="text-xs sm:text-sm"
              dangerouslySetInnerHTML={{
                __html: property?.detailedDescription,
              }}
            ></p>
          </details>

          {/* Features */}
          <details>
            <summary>Features</summary>
            <ul className="list-inside list-disc">
              {property?.features?.bullets.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </details>

          {/* Points of Interests */}
          <details>
            <summary>Points of Interests</summary>
            <div className="grid gap-4 md:grid-flow-col">
              {property?.pointsOfInterest?.map((poi, i) => (
                <a
                  key={i}
                  role="button"
                  className="flex max-w-sm flex-col items-center gap-2 rounded-lg border p-2 shadow transition-shadow duration-150 hover:shadow-lg sm:flex-row"
                  href={`https://www.google.com/maps?q=${poi?.latitude},${poi?.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    {poi?.type.includes("school") ? (
                      <FaSchool size={48} className="text-primary" />
                    ) : poi?.type?.includes("rail") ? (
                      <MdDirectionsRailway size={48} className="text-primary" />
                    ) : (
                      <MdLocationCity size={48} className="text-primary" />
                    )}
                  </div>
                  <div className="space-y-2 max-sm:text-center">
                    <h5 className="leading-tight font-semibold">
                      {poi?.title}
                    </h5>
                    <p>
                      <strong>{poi?.distanceMiles}</strong> miles away
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </details>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PropertyDetail;
