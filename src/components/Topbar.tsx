import { VEHICLE } from "@/utils/types";
import { Dropdown, Option } from "./Dropdown";

interface TopbarProps {
  filter: Option;
  updateFilter: (filter: Option) => void;
  queryString: string;
  updateQueryString: (text: string) => void;
  onSearch: () => void;
}

export const filterOptions = [
  { id: VEHICLE.ALL, title: "All" },
  { id: VEHICLE.BIKE, title: "Bike" },
  { id: VEHICLE.CAR, title: "Car" },
  { id: VEHICLE.SPACESHIP, title: "Spaceship" },
];

export const Topbar = ({
  filter,
  updateFilter,
  queryString,
  updateQueryString,
  onSearch,
}: TopbarProps) => {
  return (
    <section className="bg-slate-50/90 fixed top-0 w-full">
      <div className="p-4 flex gap-4 justify-middle h-[80px]">
        <p className="text-md self-center font-bold">Vehicle Query Engine</p>
        <input
          className="bg-slate-300 rounded-md px-2 grow focus:outline-none"
          placeholder="Query"
          value={queryString}
          onChange={(e) => updateQueryString(e.target.value)}
        />
        <Dropdown
          options={filterOptions}
          selectedOption={filter}
          onSelect={(option) => updateFilter(option)}
        />
        <button
          className="bg-slate-700 py-2 px-4 rounded-md text-white"
          onClick={onSearch}
        >
          Search
        </button>
      </div>
    </section>
  );
};
