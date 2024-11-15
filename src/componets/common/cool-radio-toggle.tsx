import React from "react";
import clsx from "clsx";
import { IOption } from "~/interfaces";

interface RadioToggleProps {
  options: IOption[];
  selected: string;
  onSelect?: (value: string) => void;
}

const CoolRadioToggle: React.FC<RadioToggleProps> = ({
  options,
  selected,
  onSelect = () => {},
}) => {
  return (
    <div className="flex h-[35px] gap-4">
      {options.map((option) => (
        <div
          key={option.value}
          onClick={() => onSelect(option.value)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div
            className={clsx(
              "w-4 h-4 rounded-full flex items-center justify-center",
              selected === option.value
                ? "bg-cool-blue"
                : "bg-cool-blue-light-0"
            )}
          />
          <span
            className={clsx(
              "font-semibold",
              selected === option.value ? "text-cool-blue" : "text-[#534E9C]"
            )}
          >
            {option.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CoolRadioToggle;
