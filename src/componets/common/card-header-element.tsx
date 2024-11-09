"use client";
import React from "react";
import CoolSelect, { Option } from "./cool-select";
import CoolToggleSwitch from "./cool-toggle-switch";
import CoolRadioToggle from "./cool-radio-toggle";

const CardHeaderElement: React.FC<{
  title: string;
  subtitle?: string;
  options?: Option[];
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  toggleOptions?: string[];
  selectedToggle?: string;
  onSelect?: (option: string) => void;
}> = ({
  title,
  subtitle,
  options,
  value = "",
  onChange,
  toggleOptions,
  onSelect,
  selectedToggle = "",
}) => {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-base font-bold mb-1">{title}</h1>
        {subtitle && (
          <h1 className="text-xs font-normal opacity-60">{subtitle}</h1>
        )}
      </div>
      <div className="flex gap-1">
        {options && (
          <CoolSelect onChange={onChange} options={options} value={value} />
        )}
        {toggleOptions && (
          <CoolToggleSwitch
            options={toggleOptions}
            selected={selectedToggle}
            onSelect={onSelect}
          />
        )}
      </div>
    </div>
  );
};

export default CardHeaderElement;
