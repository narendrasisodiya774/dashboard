"use client";
import React from "react";
import clsx from "clsx";
import { IOption } from "~/interfaces";

interface SelectProps {
  options: IOption[];
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
  className?: string;
}

const CoolSelect: React.FC<SelectProps> = ({
  options,
  value,
  onChange = () => {},
  label,
  className = "",
}) => {
  return (
    <div className={clsx(className)}>
      {label && (
        <label className="block mb-2 text-sm font-semibold">{label}</label>
      )}
      <select
        value={value}
        onChange={onChange}
        className={clsx(
          "px-2 py-1.5 border border-cool-light-2 min-w-[117px] max-w-[148px] rounded-md appearance-none focus-visible:outline-none opacity-50"
        )}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CoolSelect;
