export enum VEHICLE {
  ALL = "all",
  BIKE = "bike",
  SPACESHIP = "spaceship",
  CAR = "car",
}

export interface BaseVehicle {
  _id: string;
  year: number;
  type: VEHICLE;
}

export interface Spaceship extends BaseVehicle {
  manufacturer: string;
  maxCrew: number;
  model: string;
  topSpeed: number;
}

export interface Bike extends BaseVehicle {
  brand: string;
  gears: number;
  model: string;
  bikeType: string;
  wheelSize: number;
}

export interface Car extends BaseVehicle {
  colour: string;
  engineSize: number;
  horsepower: number;
  make: string;
  seats: number;
  topSpeed: number;
}

export type Vehicle = Spaceship | Bike | Car;
