// Layout
import { Header, Footer, SearchFilters } from "../components/layout";
// UI
import { Button, Hero, PropertyCard, AgentCard } from "../components/ui";

// Constants
import { agents } from "../lib/constants";
import listings from "../lib/listings.json";

const Dashboard = () => {
  console.log(listings?.data?.listings?.regular[0]);
  return (
    <>
      <Header />
      <Hero />
      <SearchFilters />
      <section id="listings" className="px-3 py-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {listings?.data?.listings?.regular?.map((property) => (
            <PropertyCard
              key={property?.listingId || property?.title}
              property={property}
            />
          ))}
        </div>
        {/* Pagination */}
        <div className="mt-6 flex items-center justify-center gap-x-4">
          <Button text={"Previous"} />
          <div className="bg-primary my-auto rounded-lg px-4 py-2 text-center font-semibold text-white">
            1
          </div>
          <Button text={"Next"} />
        </div>
      </section>

      <hr />

      {/* Featured Section */}
      <section className="container mx-auto my-8 space-y-2">
        <h2 className="px-2 text-3xl font-semibold shadow">Featured </h2>
        <div className="grid snap-x snap-mandatory auto-cols-max grid-flow-col gap-6 overflow-x-auto p-3 max-sm:[&::-webkit-scrollbar]:hidden">
          {listings?.data?.listings?.featured?.map((property) => (
            <PropertyCard
              key={property?.listingId || property?.title}
              property={property}
              className={"snap-center max-sm:max-w-sm"}
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
            <h2 className="font- text-4xl">Sell with top agents</h2>
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
