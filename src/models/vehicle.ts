import { Schema, model, models } from "mongoose";

// Define the base schema for a vehicle
const vehicleSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ["bike", "car", "spaceship"],
    },
    year: {
      type: Number,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    // bike specific fields
    brand: {
      type: String,
    },
    gears: {
      type: Number,
    },
    bike_type: {
      type: String,
    },
    wheel_size: {
      type: Number,
    },
    // car specific fields
    colour: {
      type: String,
    },
    engine_size: {
      type: Number,
    },
    horsepower: {
      type: Number,
    },
    make: {
      type: String,
    },
    seats: {
      type: Number,
    },
    top_speed: {
      type: Number,
    },
    // spaceship specific fields
    manufacturer: {
      type: String,
    },
    max_crew: {
      type: Number,
    },
  },
  { discriminatorKey: "type" }
);
vehicleSchema.index({ "$**": "text" });

export const Vehicle = models.Vehicle || model("Vehicle", vehicleSchema);
