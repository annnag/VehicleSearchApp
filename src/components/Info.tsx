import { IconType } from "react-icons";

interface InfoProps {
  Icon: IconType;
  title: string;
  value: string | number;
}

export const Info = ({ Icon, title, value }: InfoProps) => {
  return (
    <div className="flex items-center gap-1">
      <Icon />
      <p>
        {title}: {value}
      </p>
    </div>
  );
};
