"use client";
import React from "react";
import clsx from "clsx";

interface ToggleButtonProps {
  options: string[];
  selected: string;
  onSelect?: (option: string) => void;
}

const CoolToggleSwitch: React.FC<ToggleButtonProps> = ({
  options,
  selected,
  onSelect,
}) => {
  return (
    <div className="flex px-1 py-1 border h-[35px] border-cool-light-2 rounded-full focus-visible:outline-none w-fit">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onSelect && onSelect(option)}
          className={clsx(
            "px-4 text-[11px] font-bold py-1 rounded-full transition-all",
            selected === option ? "bg-cool-blue text-white" : "opacity-50"
          )}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default CoolToggleSwitch;
