import { Bike, Car, Spaceship } from "./types";

export const fetchVehicles = async (query: {
  filter?: string;
  queryString?: string;
}) => {
  const searchParams = query
    ? new URLSearchParams({
        filter: query.filter || "",
        queryString: query.queryString || "",
      }).toString()
    : "";
  const response = await fetch("api/vehicles?" + searchParams);
  const data = await response.json();
  return data.map((vehicle) => {
    switch (vehicle.type) {
      case "car":
        return {
          ...vehicle,
          engineSize: vehicle.engine_size,
          topSpeed: vehicle.top_speed,
        } as Car;
      case "bike":
        return {
          ...vehicle,
          bikeType: vehicle.bike_type,
          wheelSize: vehicle.wheel_size,
        } as Bike;
      case "spaceship":
        return {
          ...vehicle,
          maxCrew: vehicle.max_crew,
          topSpeed: vehicle.top_speed,
        } as Spaceship;
    }
  });
};
