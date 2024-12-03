import { VEHICLE } from "@/utils/types";
import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

export interface Option {
  id: VEHICLE;
  title: string;
}

interface DropdownProps {
  options: Option[];
  selectedOption: Option;
  onSelect: (value: Option) => void;
}

export const Dropdown = ({
  options,
  selectedOption,
  onSelect,
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-slate-300 max-w-32 px-4 py-2 flex-grow rounded-md relative w-full flex">
      <div
        className="flex justify-between items-center w-full"
        onClick={() => setOpen(!open)}
      >
        <p>{selectedOption.title}</p>
        <MdArrowDropDown />
      </div>
      {open && (
        <ul className="absolute top-[40px] left-0 bg-slate-400 w-full rounded-md">
          {options.map(({ id, title }) => (
            <li
              key={id}
              className="list-none p-2 hover:bg-slate-500 rounded-md"
              onClick={() => {
                onSelect({ id, title });
                setOpen(false);
              }}
            >
              {title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
