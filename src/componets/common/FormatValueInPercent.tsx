import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { ArrowUp, ArrowUpRed } from "~/assets/icons";

const FormatValueInPercent: React.FC<{ value: number }> = ({ value }) => {
  const isPositive = value > 0;
  return (
    <div
      className={clsx("text-[11px] text-cool-green", {
        "text-red-700": !isPositive,
      })}
    >
      {/* can be updated for negative values e.g. color, arrow down icon*/}
      {/* value will be calculated with percent helper function*/}
      <span>
        {value
          ? isPositive
            ? `+${value.toFixed(2)}`
            : `${value.toFixed(2)}`
          : "--"}
      </span>
      <span className="">%</span>
      {value ? (
        isPositive ? (
          <Image className="inline" src={ArrowUp} alt="arrow" priority />
        ) : (
          <Image
            className="inline rotate-90"
            src={ArrowUpRed}
            alt="arrow"
            priority
          />
        )
      ) : (
        <></>
      )}
    </div>
  );
};

export default FormatValueInPercent;
