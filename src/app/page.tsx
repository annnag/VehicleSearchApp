"use client";
import { SpaceshipCard } from "@/components/SpaceshipCard";
import { filterOptions, Topbar } from "@/components/Topbar";
import { useEffect, useState } from "react";
import { fetchVehicles } from "@/utils/fetchers";
import { Bike, Car, Spaceship, VEHICLE, Vehicle } from "@/utils/types";
import { CarCard } from "@/components/CarCard";
import { BikeCard } from "@/components/BikeCard";
import { Option } from "@/components/Dropdown";

export default function Home() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [filter, setFilter] = useState(filterOptions[0]);
  const [queryString, setQueryString] = useState("");

  useEffect(() => {
    fetchVehicles({})
      .then((data) => setVehicles(data))
      .catch((error) => console.log(error));
  }, []);

  const onSearch = () => {
    fetchVehicles({ filter: filter.id, queryString })
      .then((data) => {
        setVehicles(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Topbar
        {...{ filter, queryString, onSearch }}
        updateFilter={(option: Option) => setFilter(option)}
        updateQueryString={(text: string) => setQueryString(text)}
      />
      <div className="m-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-[100px]">
        {vehicles.map((vehicle) =>
          vehicle.type === VEHICLE.SPACESHIP ? (
            <SpaceshipCard data={vehicle as Spaceship} key={vehicle._id} />
          ) : vehicle.type === VEHICLE.CAR ? (
            <CarCard data={vehicle as Car} key={vehicle._id} />
          ) : (
            <BikeCard data={vehicle as Bike} key={vehicle._id} />
          )
        )}
      </div>
    </div>
  );
}
