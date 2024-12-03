import { Car } from "@/utils/types";
import {
  MdOutlinePrecisionManufacturing,
  MdCalendarToday,
  MdEventSeat,
} from "react-icons/md";
import { FaCar, FaHorseHead } from "react-icons/fa";
import { BsCardText } from "react-icons/bs";
import { PiEngineBold } from "react-icons/pi";
import { Card } from "./Card";
import { Info } from "./Info";

interface CarCardProps {
  data: Car;
}

export const CarCard = ({ data }: CarCardProps) => {
  return (
    <Card Icon={FaCar}>
      <Info
        Icon={MdOutlinePrecisionManufacturing}
        title="Colour"
        value={data.colour}
      />
      <Info Icon={PiEngineBold} title="Engine Size" value={data.engineSize} />
      <Info Icon={FaHorseHead} title="Horsepower" value={data.horsepower} />
      <Info Icon={BsCardText} title="Make" value={data.make} />
      <Info Icon={MdEventSeat} title="Seats" value={data.seats} />
      <Info Icon={MdCalendarToday} title="Year" value={data.year} />
    </Card>
  );
};
