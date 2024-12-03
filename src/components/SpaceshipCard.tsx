import { Spaceship } from "@/utils/types";
import {
  MdOutlinePrecisionManufacturing,
  MdOutlinePeopleAlt,
  MdSettings,
  MdCalendarToday,
} from "react-icons/md";
import { GiSpaceShuttle } from "react-icons/gi";
import { IoIosSpeedometer } from "react-icons/io";
import { Card } from "./Card";
import { Info } from "./Info";

interface SpaceshipCardProps {
  data: Spaceship;
}

export const SpaceshipCard = ({ data }: SpaceshipCardProps) => {
  return (
    <Card Icon={GiSpaceShuttle}>
      <Info
        Icon={MdOutlinePrecisionManufacturing}
        title="Manufacturer"
        value={data.manufacturer}
      />
      <Info Icon={MdOutlinePeopleAlt} title="Max Crew" value={data.maxCrew} />
      <Info Icon={MdSettings} title="Model" value={data.model} />
      <Info Icon={IoIosSpeedometer} title="Top Speed" value={data.topSpeed} />
      <Info Icon={MdCalendarToday} title="Year" value={data.year} />
    </Card>
  );
};
