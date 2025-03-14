import { useRef, useState } from "react";
import useDebounce from "../hooks/useDebounce";

// UI
import { Input, Select, IconButton, Button } from "../ui";

// Icons
import { IoSearch } from "react-icons/io5";
import { MdFilterList, MdFilterListOff } from "react-icons/md";

// Constants
import { sortOptions, propertyTypes } from "../../lib/constants";

// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  setSortOrder,
  setPriceRange as setPriceRangeAction,
  setPropertyType,
  setLocation,
  resetFilter,
} from "../../store/filterSlice";
import { useAutocompleteQuery } from "../../store/apiSlice";

const SearchFilters = () => {
  const filtersRef = useRef(null);
  const dispatch = useDispatch();
  const {
    sortOrder,
    locationValue: location,
    propertySubType,
  } = useSelector((state) => state.filter);

  const [openSearchResults, setOpenSearchResults] = useState(false);
  const [search, setSearch] = useState(location || "");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });

  const debouncedSearch = useDebounce(search, 1500);

  const handlePriceRange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({ ...prev, [name]: value }));
  };

  const filter = () => {
    if (priceRange?.max < priceRange?.min) return;
    if (priceRange?.min && priceRange?.max) {
      dispatch(setPriceRangeAction(priceRange));
    }
  };

  const { data: autoComplete } = useAutocompleteQuery(debouncedSearch);

  const handleLocation = (loc) => {
    setSearch(loc?.geoLabel);
    dispatch(
      setLocation({
        locationValue: loc?.geoLabel,
        locationIdentifier: loc?.geoIdentifier,
      }),
    );
  };

  return (
    <section
      id="search"
      className="my- sticky top-0 z-20 container mx-auto mt-8 items-end justify-center space-y-3 gap-x-8 rounded-b-lg bg-white p-4 lg:flex lg:space-y-0"
    >
      {/* Search Bar */}
      <div className="relative flex items-center justify-center gap-x-4">
        <Input
          type="search"
          placeholder={"Search"}
          endAdornment={<IoSearch size={24} />}
          className={"w-sm md:w-lg"}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setOpenSearchResults(true)}
          onBlur={() => setOpenSearchResults(false)}
        />
        <IconButton
          icon={<MdFilterList />}
          className={"lg:hidden"}
          onClick={() => {
            if (filtersRef.current) {
              filtersRef.current.classList.toggle("hidden");
            }
          }}
        />

        {/* Search Results */}
        <div
          className="absolute top-12 z-20 max-h-[300px] max-w-screen min-w-full overflow-y-auto rounded-lg bg-white p-2 shadow-md"
          hidden={!openSearchResults}
        >
          <ul className="space-y-2">
            {search && (
              <li className="flex items-center gap-x-2 rounded-lg p-1.5 hover:bg-gray-200">
                <IoSearch size={24} />
                {search}
              </li>
            )}

            {autoComplete?.data?.geoSuggestion?.map((suggestion) => (
              <li
                role="button"
                key={suggestion?.geoIdentifier}
                className="line-clamp-1 flex items-center gap-x-2 rounded-lg p-1.5 text-nowrap text-ellipsis hover:bg-gray-200"
                onMouseDown={() => handleLocation(suggestion)}
              >
                <IoSearch size={24} />
                {suggestion?.geoLabel}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Filters */}
      <section
        className="hidden flex-wrap items-center space-y-4 gap-x-4 lg:flex lg:items-end lg:space-y-0"
        ref={filtersRef}
      >
        {/* By Price */}
        <div className="flex gap-x-4">
          <Input
            type={"number"}
            name="min"
            label={"Minimum Price (₤)"}
            placeholder={"Min Price (GPB)"}
            value={priceRange?.min}
            onChange={handlePriceRange}
          />
          <Input
            type={"number"}
            name={"max"}
            label={"Maximum Price (₤)"}
            placeholder={"Max Price (GPB)"}
            value={priceRange?.max}
            onChange={handlePriceRange}
          />
        </div>

        {/* By Property Type */}
        <Select
          name={"propertyType"}
          label={"Property Type"}
          options={propertyTypes}
          className={"max-w-sm"}
          value={propertySubType}
          onChange={(e) => dispatch(setPropertyType(e.target.value))}
        />

        {/* Sort By */}
        <Select
          name={"sort"}
          label={"Sort By"}
          options={sortOptions}
          className={"max-w-sm"}
          value={sortOrder}
          onChange={(e) => dispatch(setSortOrder(e.target.value))}
        />

        <div className="flex flex-none items-center gap-x-4 max-md:mt-3 max-md:justify-center">
          {/* Filter Button */}
          <Button
            text={"Filter"}
            icon={<MdFilterList />}
            onClick={filter}
            hidden={!(priceRange?.min && priceRange?.max)}
          />
          {/* Reset Button */}
          <IconButton
            icon={<MdFilterListOff />}
            className={
              priceRange?.min || priceRange?.max ? "border p-2" : "hidden"
            }
            onClick={() => {
              dispatch(resetFilter());
              setPriceRange({ min: "", max: "" });
            }}
          />
        </div>
      </section>
    </section>
  );
};

export default SearchFilters;
