import { useRef } from "react";

// UI
import { Input, Select, IconButton, Button } from "../ui";

// Icons
import { IoSearch } from "react-icons/io5";
import { MdFilterList, MdFilterListOff } from "react-icons/md";

// Constants
import { sortOptions, locationOptions } from "../../lib/constants";

const SearchFilters = () => {
  const filtersRef = useRef(null);

  return (
    <section
      id="search"
      className="my- sticky top-0 z-20 container mx-auto mt-8 items-end justify-center space-y-3 gap-x-8 rounded-b-lg bg-white p-4 lg:flex lg:space-y-0"
    >
      {/* Search Bar */}
      <form className="flex items-center justify-center gap-x-4">
        <Input
          type="search"
          placeholder={"Search"}
          endAdornment={
            <button type="submit">
              <IoSearch size={24} />
            </button>
          }
          className={"w-sm md:w-md"}
        />
        <IconButton
          icon={<MdFilterList />}
          className={"lg:hidden"}
          onClick={() => filtersRef.current.classList.toggle("hidden")}
        />
      </form>
      {/* Filters */}
      <section
        className="hidden flex-wrap items-center space-y-4 gap-x-4 lg:flex lg:items-end lg:space-y-0"
        ref={filtersRef}
      >
        {/* By Location */}
        {/* <Select
        name={"location"}
        label={"Location"}
        options={locationOptions}
        defaultValue={"Choose any Location"}
        onChange={(e) => console.log(e.target.value)}
      /> */}

        {/* By Price */}
        <div className="flex gap-x-4">
          <Input
            type={"number"}
            label={"Minimum Price (₤)"}
            placeholder={"Min Price (GPB)"}
            onChange={(e) => console.log(e.target.value)}
          />
          <Input
            type={"number"}
            label={"Maximum Price (₤)"}
            placeholder={"Max Price (GPB)"}
            onChange={(e) => console.log(e.target.value)}
          />
        </div>

        {/* Sort By */}
        <Select
          name={"sort"}
          label={"Sort By"}
          options={sortOptions}
          defaultValue={"Recent"}
          className={"max-w-sm"}
          onChange={(e) => console.log(e.target.value)}
        />

        <div className="flex flex-none items-center gap-x-4">
          {/* Filter Button */}
          <Button text={"Filter"} icon={<MdFilterList />} />
          {/* Reset Button */}
          <Button text={"Reset"} icon={<MdFilterListOff />} />
        </div>
      </section>
    </section>
  );
};

export default SearchFilters;
