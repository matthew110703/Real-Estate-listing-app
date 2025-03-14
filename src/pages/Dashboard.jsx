import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

// Layout
import { Header, Footer, SearchFilters } from "../components/layout";
// UI
import { Button, Hero, PropertyCard, AgentCard } from "../components/ui";

// Firebase
import { auth } from "../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

// Redux
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useGetPropertiesQuery } from "../store/apiSlice";
import { setPage } from "../store/filterSlice";

// Constants
import { agents } from "../lib/constants";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const params = useSelector((state) => state.filter, shallowEqual);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        console.log("User not logged in");
        setIsAuthenticated(false);
        navigate("/");
      } else {
        setIsAuthenticated(true);
      }
    });

    return unsubscribe;
  }, [navigate]);

  const { data, error, isLoading, isFetching } = useGetPropertiesQuery(params);

  // Memoized Listings
  const regularListings = useMemo(
    () => data?.data?.listings?.regular || [],
    [data],
  );
  const featuredListings = useMemo(
    () => data?.data?.listings?.featured || [],
    [data],
  );

  // Handle page navigation
  const handlePageChange = (direction) => {
    if (direction === "next") dispatch(setPage(params.page + 1));
    if (direction === "prev" && params.page > 1)
      dispatch(setPage(params.page - 1));
  };

  if (isAuthenticated === false) return null; // Prevents unnecessary renders before redirection

  return (
    <>
      <Header />
      <Hero />
      <SearchFilters />

      {/* Listings Section */}
      <section id="listings" className="px-3 py-6">
        {isLoading || isFetching ? (
          <p className="my-16 text-center text-xl font-semibold">Loading...</p>
        ) : error ? (
          <p className="my-16 text-center text-xl font-semibold text-red-600">
            An Error Occurred. Please try again later.
          </p>
        ) : regularListings.length === 0 ? (
          <p className="my-16 text-center text-xl font-semibold">
            No properties found
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {regularListings.map((property) => (
              <PropertyCard
                key={property?.listingId || property?.title}
                property={property}
              />
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-center gap-x-4">
          <Button
            text={"Previous"}
            onClick={() => handlePageChange("prev")}
            disabled={params.page === 1}
          />
          <div className="bg-primary my-auto rounded-lg px-4 py-2 text-center font-semibold text-white">
            {params?.page}
          </div>
          <Button text={"Next"} onClick={() => handlePageChange("next")} />
        </div>
      </section>

      <hr />

      {/* Featured Listings */}
      <section className="container mx-auto my-8 space-y-2">
        <h2 className="px-2 text-3xl font-semibold shadow">Featured</h2>
        <div className="grid snap-x snap-mandatory auto-cols-max grid-flow-col gap-6 overflow-x-auto p-3 max-sm:[&::-webkit-scrollbar]:hidden">
          {featuredListings.map((property) => (
            <PropertyCard
              key={property?.listingId || property?.title}
              property={property}
              className={"min-w-full snap-center max-sm:max-w-sm"}
            />
          ))}
        </div>
      </section>

      {/* Agents Section */}
      <section
        id="agents"
        className="container mx-auto space-y-4 gap-x-4 border-t border-b px-3 py-6 md:flex md:space-y-0"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold">Sell with top agents</h2>
            <p className="text-sm">
              Skip the hustle and let the pros get things done
            </p>
          </div>
          <Button text="Top Agents" />
        </div>

        {/* Agents */}
        <div className="grid basis-5/6 auto-cols-min grid-flow-col gap-4 overflow-x-auto max-sm:[&::-webkit-scrollbar]:hidden">
          {agents?.map((agent) => (
            <AgentCard key={agent?.name} {...agent} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Dashboard;
