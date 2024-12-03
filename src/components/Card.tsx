import { PropsWithChildren } from "react";
import { IconType } from "react-icons";

interface CardProps {
  Icon: IconType;
}

export const Card = ({ children, Icon }: PropsWithChildren<CardProps>) => {
  return (
    <div className="bg-slate-400/30 p-2 rounded-md flex-grow">
      <div className="flex justify-center">
        <Icon size={50} />
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};
