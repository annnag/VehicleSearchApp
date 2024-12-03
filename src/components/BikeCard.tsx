import { Bike } from "@/utils/types";
import {
  MdSettings,
  MdCalendarToday,
  MdOutlinePedalBike,
} from "react-icons/md";
import { PiGearFineBold } from "react-icons/pi";
import { VscTypeHierarchy } from "react-icons/vsc";
import { FaTag } from "react-icons/fa";
import { Card } from "./Card";
import { Info } from "./Info";

interface BikeCardProps {
  data: Bike;
}

export const BikeCard = ({ data }: BikeCardProps) => {
  return (
    <Card Icon={MdOutlinePedalBike}>
      <Info Icon={FaTag} title="Brand" value={data.brand} />
      <Info Icon={PiGearFineBold} title="gears" value={data.gears} />
      <Info Icon={MdSettings} title="Model" value={data.model} />
      <Info Icon={VscTypeHierarchy} title="Type" value={data.bikeType} />
      <Info Icon={MdCalendarToday} title="Year" value={data.year} />
    </Card>
  );
};
