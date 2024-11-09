import React from "react";
import { formatCurrency } from "~/utils/controlles";

const FormatValueWithCurrency: React.FC<{ value: number; curr?: string }> = ({
  value,
}) => {
  return (
    <div className="text-[26px] text-cool-blue font-bold">
      <span className="">₹</span>
      <span>{value ? formatCurrency(value) : "--"}</span>
    </div>
  );
};

export default FormatValueWithCurrency;
